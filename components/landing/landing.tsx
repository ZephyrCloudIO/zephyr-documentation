import { Link } from '@rspress/core/theme';
import {
  CodeBlockRuntime,
  PackageManagerTabs,
  Tab,
  Tabs,
} from '@rspress/core/theme';
import { ArrowRight, ArrowUpRight, Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { ParcelIcon } from '../icons/parcel';
import { ReactIcon } from '../icons/react';
import { RepackIcon } from '../icons/repack';
import { RolldownIcon } from '../icons/rolldown';
import { RollupIcon } from '../icons/rollup';
import { RsbuildIcon } from '../icons/rsbuild';
import { RspackIcon } from '../icons/rspack';
import { ViteIcon } from '../icons/vite';
import { WebpackIcon } from '../icons/webpack';
import { mcpClients } from '../mcp-promo';

const WITH_ZEPHYR = {
  npm: 'npx with-zephyr',
  yarn: 'yarn dlx with-zephyr',
  pnpm: 'pnpx with-zephyr',
  bun: 'bunx with-zephyr',
};

const EXAMPLE_PROMPTS = '/tools/api-mcp#explore-your-zephyr-account';

const VITE_DIFF = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr } from 'vite-plugin-zephyr';

export default defineConfig({
  plugins: [react()],
  plugins: [react(), withZephyr()],
});`;

const VITE_DIFF_MOBILE = `import react from '@vitejs/plugin-react';
import { withZephyr } from
  'vite-plugin-zephyr';

  plugins: [react()],
  plugins: [react(), withZephyr()],`;

const SESSION = `> Production looks broken. Roll
  header-component.ecommerce.acme back to
  version 124 and confirm.

Inspected versions 124 and 125 and the tag
Moved “production” from version 125 to 124
Read the tag: production serves version 124`;

const SESSION_MOBILE = `> Roll production back to version 124.

Moved “production” from 125 to 124
production now serves version 124`;

const BUILD = `$ npm run build
✓ built in 1.84s
Hi ana!
Building to cart.shop.acme#142
Uploaded 3 assets in 412ms
Build deployed in 195ms
Deployed to edge:
https://ana-142-cart-shop-acme-ze.zephyr-cloud.io`;

const BUILD_MOBILE = `$ npm run build
Building to cart.shop.acme#142
Uploaded 3 assets in 412ms
Deployed to edge:
https://ana-142-cart-shop-acme-ze
.zephyr-cloud.io`;

type LineTransformer = {
  name: string;
  pre?: (
    this: { addClassToHast: (node: unknown, name: string) => void },
    node: unknown,
  ) => void;
  line?: (
    this: { addClassToHast: (node: unknown, name: string) => void },
    node: unknown,
    line: number,
  ) => void;
};

function lineClasses(
  classes: Record<number, string>,
  markDiff = false,
): LineTransformer {
  return {
    name: 'zephyr-line-classes',
    pre(node) {
      if (markDiff) this.addClassToHast(node, 'has-diff');
    },
    line(node, line) {
      const className = classes[line];
      if (className) this.addClassToHast(node, className);
    },
  };
}

const diffDesktop = lineClasses(
  { 3: 'diff add', 6: 'diff remove', 7: 'diff add' },
  true,
);
const diffMobile = lineClasses(
  { 2: 'diff add', 3: 'diff add', 5: 'diff remove', 6: 'diff add' },
  true,
);
const sessionDesktop = lineClasses({
  1: 'zc-prompt',
  2: 'zc-prompt',
  3: 'zc-prompt',
  5: 'zc-ok',
  6: 'zc-ok',
  7: 'zc-ok-last',
});
const sessionMobile = lineClasses({
  1: 'zc-prompt',
  3: 'zc-ok',
  4: 'zc-ok-last',
});
const buildDesktop = lineClasses({
  1: 'zc-prompt',
  2: 'zc-faint',
  3: 'zc-ze',
  4: 'zc-ze',
  5: 'zc-ze',
  6: 'zc-ze',
  7: 'zc-ze',
  8: 'zc-url',
});
const buildMobile = lineClasses({
  1: 'zc-prompt',
  2: 'zc-ze',
  3: 'zc-ze',
  4: 'zc-ze',
  5: 'zc-url',
  6: 'zc-url',
});

function useKeyboardTabs(rootRef: { current: HTMLElement | null }) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const enhance = () => {
      root.querySelectorAll<HTMLElement>('.rp-tabs__label').forEach((list) => {
        list.setAttribute('role', 'tablist');
        if (!list.hasAttribute('aria-label')) {
          const label = list.closest('.zc-pm')
            ? 'Package manager'
            : 'Assistant';
          list.setAttribute('aria-label', label);
        }
        list
          .querySelectorAll<HTMLElement>('.rp-tabs__label__item')
          .forEach((item) => {
            const selected = item.classList.contains(
              'rp-tabs__label__item--selected',
            );
            item.setAttribute('role', 'tab');
            item.setAttribute('aria-selected', selected ? 'true' : 'false');
            item.tabIndex = selected ? 0 : -1;
          });
      });
      root
        .querySelectorAll<HTMLElement>('.rp-tabs__content__item')
        .forEach((panel) => {
          panel.setAttribute('role', 'tabpanel');
        });
      root
        .querySelectorAll<HTMLButtonElement>('.rp-code-copy-button')
        .forEach((button) => {
          if (!button.getAttribute('aria-label')) {
            button.setAttribute(
              'aria-label',
              button.getAttribute('title') || 'Copy code',
            );
          }
        });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.classList.contains('rp-tabs__label__item')) return;
      const list = target.closest('.rp-tabs__label');
      if (!list) return;
      const tabs = [
        ...list.querySelectorAll<HTMLElement>('.rp-tabs__label__item'),
      ];
      const current = tabs.indexOf(target);
      if (current < 0) return;
      let next = current;
      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      else if (event.key === 'ArrowLeft')
        next = (current - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        target.click();
        return;
      } else return;
      event.preventDefault();
      const nextLabel = tabs[next]?.textContent ?? '';
      const listLabel = list.getAttribute('aria-label');
      tabs[next]?.click();
      window.requestAnimationFrame(() => {
        const lists = [
          ...root.querySelectorAll<HTMLElement>('.rp-tabs__label'),
        ];
        const liveList =
          lists.find((item) => item.getAttribute('aria-label') === listLabel) ??
          list;
        const liveTabs = [
          ...liveList.querySelectorAll<HTMLElement>('.rp-tabs__label__item'),
        ];
        const match =
          liveTabs.find((item) => item.textContent === nextLabel) ??
          liveTabs[next];
        match?.focus();
      });
    };

    enhance();
    root.addEventListener('keydown', onKeyDown);
    const observer = new MutationObserver(enhance);
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributeFilter: ['class'],
    });
    return () => {
      observer.disconnect();
      root.removeEventListener('keydown', onKeyDown);
    };
  }, [rootRef]);
}

function Step({ n, title }: { n: string; title: string }) {
  return (
    <h3 className="zc-step">
      <span className="zc-step-n">{n}</span>
      <span>{title}</span>
    </h3>
  );
}

function TextLink({
  href,
  children,
  external = false,
  large = false,
}: {
  href: string;
  children: string;
  external?: boolean;
  large?: boolean;
}) {
  const className = large ? 'zc-text-link zc-text-link--lg' : 'zc-text-link';
  const icon = external ? (
    <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
  ) : (
    <ArrowRight aria-hidden size={16} strokeWidth={2} />
  );
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
      {icon}
    </Link>
  );
}

function TitledBlock({
  title,
  aside,
  lang,
  code,
  lines,
  wrapCode = false,
}: {
  title: string;
  aside?: string;
  lang: string;
  code: string;
  lines: LineTransformer;
  wrapCode?: boolean;
}) {
  return (
    <div className="zc-titled">
      {aside ? <span className="zc-aside">{aside}</span> : null}
      <CodeBlockRuntime
        lang={lang}
        title={title}
        code={code}
        wrapCode={wrapCode}
        shikiOptions={{ transformers: [lines] }}
      />
    </div>
  );
}

function AssistantTabs() {
  return (
    <div className="zc-assist">
      <Tabs>
        {(Object.keys(mcpClients) as (keyof typeof mcpClients)[]).map(
          (name) => {
            const client = mcpClients[name];
            const label =
              client.shortLabel === 'VS Code'
                ? client.shortLabel
                : client.label;
            return (
              <Tab key={name} label={label}>
                <CodeBlockRuntime
                  lang={client.format === 'config' ? 'json' : 'bash'}
                  code={client.commands.join('\n')}
                  wrapCode
                />
              </Tab>
            );
          },
        )}
      </Tabs>
    </div>
  );
}

const bundlers = [
  { name: 'Webpack', Icon: WebpackIcon },
  { name: 'Rspack', Icon: RspackIcon },
  { name: 'Rsbuild', Icon: RsbuildIcon },
  { name: 'Vite', Icon: ViteIcon },
  { name: 'Rolldown', Icon: RolldownIcon },
  { name: 'Rollup', Icon: RollupIcon },
  { name: 'Parcel', Icon: ParcelIcon },
  { name: 'Re.Pack', Icon: RepackIcon, wide: true },
  { name: 'Metro', Icon: ReactIcon },
];

function BundlerRow() {
  return (
    <div className="zc-bundler-row">
      <p className="zc-bundler-label">Supported bundlers</p>
      <ul className="zc-bundlers">
        {bundlers.map(({ name, Icon, wide }) => (
          <li key={name} className={wide ? 'zc-repack' : undefined}>
            <Icon aria-hidden />
            <span className="sr-only">{name}</span>
          </li>
        ))}
      </ul>
      <TextLink href="/getting-started/find-your-sdk">
        Find your bundler
      </TextLink>
    </div>
  );
}

const paths = [
  {
    title: 'Deploy a first app',
    description:
      'Start from a template, or add Zephyr\nto the app you already have.',
    mobile: 'Quick start, first app tutorial, templates.',
    href: '/getting-started/quick-start',
    links: [
      ['Quick start', '/getting-started/quick-start'],
      ['Your first app', '/tutorials/first-app'],
      ['create-zephyr-apps', '/tools/create-zephyr-apps'],
    ],
  },
  {
    title: 'Check that it fits',
    description:
      'See how Zephyr works, what it\nsupports, and what it replaces.',
    mobile: 'SDK finder, architecture, why Zephyr Cloud.',
    href: '/getting-started/find-your-sdk',
    links: [
      ['Find your SDK', '/getting-started/find-your-sdk'],
      ['Architecture', '/reference/architecture'],
      ['Why Zephyr Cloud', '/reference/why-zephyr-cloud'],
    ],
  },
  {
    title: 'Look something up',
    description:
      'Go to a feature guide, the\nconfiguration reference, or an error code.',
    mobile: 'Feature guides, reference, error codes.',
    href: '/features/versions',
    links: [
      ['Versions', '/features/versions'],
      ['Tags & environments', '/features/tags-environments'],
      ['Error codes', '/errors'],
    ],
  },
  {
    title: 'Let an agent deploy',
    description:
      'Connect Claude Code, Codex, Cursor,\nGemini CLI, or VS Code to your account.',
    mobile: 'Zephyr API MCP and example prompts.',
    href: '/tools/api-mcp',
    links: [
      ['Zephyr API MCP', '/tools/api-mcp'],
      ['Example prompts', EXAMPLE_PROMPTS],
    ],
  },
] as const;

function PathLinks({
  links,
}: {
  links: readonly (readonly [string, string])[];
}) {
  return (
    <p className="zc-path-links">
      {links.map(([label, href], index) => (
        <span key={href}>
          {index > 0 ? <span aria-hidden="true"> · </span> : null}
          <Link href={href}>{label}</Link>
        </span>
      ))}
    </p>
  );
}

const desktopBuilds = [
  ['#137', 'fix cart rounding', ''],
  ['#138', 'new promo banner', ''],
  ['#139', 'checkout v2', 'production'],
  ['#140', 'a11y pass', ''],
  ['#141', 'apple pay', ''],
  ['#142', 'from the session', 'latest'],
] as const;

const mobileBuilds = [
  ['#142', 'from the session', 'latest'],
  ['#141', 'apple pay', ''],
  ['#140', 'a11y pass', ''],
  ['#139', 'checkout v2', 'production'],
  ['#138', 'new promo banner', ''],
] as const;

function BuildDot({ tag }: { tag: string }) {
  return <span className="zc-dot" aria-hidden="true" data-tag={tag} />;
}

function DesktopRail() {
  return (
    <div className="zc-rail-block zc-only-desktop">
      <ol className="zc-rail" aria-label="Illustrative builds">
        <span className="zc-rail-track" aria-hidden="true" />
        {desktopBuilds.map(([num, desc, tag]) => (
          <li
            key={num}
            className={tag ? `zc-build zc-build--${tag}` : 'zc-build'}
          >
            {tag ? (
              <>
                <span className={`zc-build-tag zc-build-tag--${tag}`}>
                  {tag}
                </span>
                <span className="zc-build-stem" aria-hidden="true" />
              </>
            ) : null}
            <BuildDot tag={tag} />
            <span className="zc-build-num">{num}</span>
            <span className="zc-build-desc">{desc}</span>
          </li>
        ))}
      </ol>
      <p className="zc-caption">Illustrative builds.</p>
    </div>
  );
}

function MobileRail() {
  return (
    <div className="zc-rail-m zc-only-mobile">
      <span className="zc-rail-m-track" aria-hidden="true" />
      <ol aria-label="Illustrative builds">
        {mobileBuilds.map(([num, desc, tag]) => (
          <li
            key={num}
            className={tag ? `zc-build-m zc-build--${tag}` : 'zc-build-m'}
          >
            <BuildDot tag={tag} />
            <span className="zc-build-num">{num}</span>
            <span className="zc-build-desc">{desc}</span>
            {tag ? (
              <span className={`zc-build-tag zc-build-tag--${tag}`}>{tag}</span>
            ) : (
              <span />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

const features = [
  [
    'Versions',
    'Each build is an immutable\nsnapshot with a preview URL.',
    '/features/versions',
  ],
  [
    'Tags & environments',
    'Promote versions with rules\nand custom domains.',
    '/features/tags-environments',
  ],
  [
    'Instant rollbacks',
    'Move traffic to a version\nthat is already on the edge.',
    '/features/instant-rollbacks',
  ],
  [
    'Locked environments',
    'Freeze production until\nsomeone unlocks it.',
    '/features/locking-tags-environments',
  ],
] as const;

const bundlerRows = [
  ['Webpack', 'zephyr-webpack-plugin', '/bundlers/webpack'],
  ['Rspack', 'zephyr-rspack-plugin', '/bundlers/rspack'],
  ['Rsbuild', 'zephyr-rsbuild-plugin', '/bundlers/rsbuild'],
  ['Vite', 'vite-plugin-zephyr', '/bundlers/vite'],
  ['Rolldown', 'zephyr-rolldown-plugin', '/bundlers/rolldown'],
  ['Rollup', 'rollup-plugin-zephyr', '/bundlers/rollup'],
  ['Parcel', 'parcel-reporter-zephyr', '/bundlers/parcel'],
  ['Re.Pack', 'zephyr-repack-plugin', '/bundlers/repack'],
  ['Metro', 'zephyr-metro-plugin', '/bundlers/metro'],
] as const;

const frameworkRows = [
  ['Astro', 'zephyr-astro-integration', '/meta-frameworks/astro'],
  ['Ember.js', 'vite-plugin-zephyr', '/meta-frameworks/emberjs'],
  ['ModernJS', 'zephyr-modernjs-plugin', '/meta-frameworks/modernjs'],
  ['Nitro', "preset: 'zephyr'", '/meta-frameworks/nitro'],
  ['Nuxt', 'zephyr-nuxt-module', '/meta-frameworks/nuxt'],
  ['Rspress', 'zephyr-rspress-plugin', '/meta-frameworks/rspress'],
  ['Rslib', 'zephyr-rsbuild-plugin', '/meta-frameworks/rslib'],
  [
    'TanStack Start',
    'vite-plugin-tanstack-start-zephyr',
    '/meta-frameworks/tanstack-start',
  ],
] as const;

const cloudRows = [
  ['Cloudflare', '/cloud/cloudflare', false],
  ['AWS', '/cloud/aws', false],
  ['Fastly', '/cloud/fastly', false],
  ['Akamai', '/cloud/akamai', false],
  ['Kubernetes', '/cloud/kubernetes', true],
] as const;

function StackColumn({
  title,
  packageLabel,
  rows,
}: {
  title: string;
  packageLabel?: string;
  rows: readonly (
    readonly [string, string, string] | readonly [string, string, boolean]
  )[];
}) {
  const hasPackage = Boolean(packageLabel);
  return (
    <div>
      <div className="zc-stack-head">
        <span>{title}</span>
        {packageLabel ? <span>{packageLabel}</span> : null}
      </div>
      <ul>
        {rows.map((row) => {
          if (hasPackage) {
            const [name, pkg, href] = row as readonly [string, string, string];
            return (
              <li key={name}>
                <Link className="zc-stack-row" href={href}>
                  <span>{name}</span>
                  <code>{pkg}</code>
                </Link>
              </li>
            );
          }
          const [name, href, enterprise] = row as readonly [
            string,
            string,
            boolean,
          ];
          return (
            <li key={name}>
              <Link className="zc-stack-row" href={href}>
                <span className="zc-stack-name">
                  {name}
                  {enterprise ? (
                    <span className="zc-enterprise">Enterprise</span>
                  ) : null}
                </span>
                <ArrowRight
                  className="zc-arrow"
                  aria-hidden
                  size={16}
                  strokeWidth={1.75}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BigCommand() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="zc-big-cmd"
      aria-label="Copy npx with-zephyr"
      onClick={() => {
        void navigator.clipboard.writeText('npx with-zephyr');
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      <span className="zc-prompt-char" aria-hidden="true">
        $
      </span>
      <code>npx with-zephyr</code>
      {copied ? (
        <Check aria-hidden size={20} />
      ) : (
        <Copy aria-hidden size={20} />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied' : ''}
      </span>
    </button>
  );
}

function Opener() {
  return (
    <section className="zc-opener" aria-labelledby="home-title">
      <div className="zc-wrap">
        <h1 className="zc-h1" id="home-title">
          <span className="zc-h1-line">
            <span className="zc-h1-break">Idea to</span> reality.
          </span>
          <span className="zc-h1-line zc-accent">
            <span className="zc-h1-break">For you and</span> your agents.
          </span>
        </h1>
        <p className="zc-lede zc-only-desktop">
          Your assistant can ship the idea for you. Connect it to Zephyr once.
          <br />
          It then inspects deployments, promotes versions, and rolls back
          <br />
          with the permissions you already have.
        </p>
        <p className="zc-lede zc-only-mobile">
          Your assistant can ship the idea for you.
          <br />
          Connect it to Zephyr once. It uses the
          <br />
          permissions you already have.
        </p>
        <hr className="zc-rule" />
        <div className="zc-opener-grid">
          <div>
            <Step n="01" title="Add the Zephyr MCP server" />
            <AssistantTabs />
            <Step n="02" title="Sign in" />
            <p className="zc-sign-in zc-only-desktop">
              Your assistant opens the standard Zephyr sign-in page.
              <br />
              You do not create or paste an API token.
            </p>
            <p className="zc-sign-in zc-only-mobile">
              Your assistant opens the Zephyr sign-in page.
              <br />
              You do not paste a token.
            </p>
          </div>
          <div>
            <div className="zc-step-head">
              <Step n="03" title="Ask" />
              <span className="zc-only-desktop">
                <TextLink href={EXAMPLE_PROMPTS}>Example prompts</TextLink>
              </span>
            </div>
            <div className="zc-only-desktop">
              <TitledBlock
                title="Claude Code · zephyr MCP"
                aside="illustrative"
                lang="text"
                code={SESSION}
                lines={sessionDesktop}
              />
            </div>
            <div className="zc-only-mobile">
              <TitledBlock
                title="Claude Code · zephyr MCP"
                aside="illustrative"
                lang="text"
                code={SESSION_MOBILE}
                lines={sessionMobile}
              />
              <p style={{ marginTop: 16 }}>
                <TextLink href={EXAMPLE_PROMPTS} large>
                  Example prompts
                </TextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandSection() {
  return (
    <section className="zc-section" aria-labelledby="one-command">
      <div className="zc-wrap">
        <div className="zc-split">
          <h2 className="zc-h2" id="one-command">
            {'One command.\nA live URL.'}
          </h2>
          <p className="zc-section-lede zc-only-desktop">
            Run one command in the app you already have.
            <br />
            Your next build deploys to its own live URL.
            <br />
            You do not write a pipeline.
          </p>
          <p className="zc-section-lede zc-only-mobile">
            Run one command in the app you already
            <br />
            have. Your next build deploys to its own
            <br />
            live URL. You do not write a pipeline.
          </p>
        </div>
        <hr className="zc-rule" />
        <div className="zc-cols">
          <div>
            <Step n="01" title="Run the codemod" />
            <div className="zc-pm">
              <PackageManagerTabs command={WITH_ZEPHYR} />
            </div>
            <div className="zc-only-desktop">
              <p className="zc-note">
                The codemod finds your bundler
                <br />
                and adds the Zephyr plugin.
                <br />
                Your build command stays the same.
              </p>
              <p style={{ marginTop: 20 }}>
                <TextLink href="/getting-started/quick-start">
                  Read the quick start
                </TextLink>
              </p>
              <p className="zc-new-app">
                <span>New app?</span>
                <code>npx create-zephyr-apps</code>
              </p>
            </div>
          </div>
          <div>
            <Step n="02" title="It changes two lines" />
            <div className="zc-only-desktop">
              <TitledBlock
                title="vite.config.ts"
                aside="+2  −1"
                lang="ts"
                code={VITE_DIFF}
                lines={diffDesktop}
              />
            </div>
            <div className="zc-only-mobile">
              <TitledBlock
                title="vite.config.ts"
                aside="+2  −1"
                lang="ts"
                code={VITE_DIFF_MOBILE}
                lines={diffMobile}
              />
            </div>
          </div>
          <div>
            <Step n="03" title="Your next build is live" />
            <div className="zc-only-desktop">
              <TitledBlock
                title="zsh · ~/cart"
                aside="illustrative"
                lang="text"
                code={BUILD}
                lines={buildDesktop}
              />
            </div>
            <div className="zc-only-mobile">
              <TitledBlock
                title="zsh · ~/cart"
                aside="illustrative"
                lang="text"
                code={BUILD_MOBILE}
                lines={buildMobile}
                wrapCode
              />
            </div>
          </div>
        </div>
        <div className="zc-only-mobile" style={{ marginTop: 20 }}>
          <TextLink href="/getting-started/quick-start" large>
            Read the quick start
          </TextLink>
        </div>
        <BundlerRow />
      </div>
    </section>
  );
}

function Paths() {
  return (
    <section className="zc-section" aria-labelledby="choose-path">
      <div className="zc-wrap">
        <h2 className="zc-h2" id="choose-path">
          Choose your path.
        </h2>
        <div className="zc-paths zc-only-desktop">
          {paths.map((path) => (
            <article key={path.title} className="zc-path">
              <h3>{path.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{path.description}</p>
              <PathLinks links={path.links} />
              <ArrowRight
                className="zc-arrow"
                aria-hidden
                size={20}
                strokeWidth={1.75}
              />
            </article>
          ))}
        </div>
        <div className="zc-paths zc-only-mobile">
          {paths.map((path) => (
            <Link key={path.title} className="zc-path" href={path.href}>
              <span>
                <h3>{path.title}</h3>
                <p>{path.mobile}</p>
              </span>
              <ArrowRight
                className="zc-arrow"
                aria-hidden
                size={18}
                strokeWidth={1.75}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Release() {
  return (
    <section className="zc-section" aria-labelledby="release-title">
      <div className="zc-wrap">
        <div className="zc-split">
          <h2 className="zc-h2" id="release-title">
            <span className="zc-only-desktop">
              {'Deploying is a side effect.\nReleasing is a decision.'}
            </span>
            <span className="zc-only-mobile">
              {'Deploying is a\nside effect.\nReleasing is a\ndecision.'}
            </span>
          </h2>
          <p className="zc-section-lede zc-only-desktop">
            Build #142 from the session above is already live.
            <br />
            Production still serves #139 until you move the tag.
            <br />
            To roll back, move the tag again. Nothing rebuilds.
          </p>
          <p className="zc-section-lede zc-only-mobile">
            Build #142 is already live. Production still
            <br />
            serves #139 until you move the tag.
            <br />
            Nothing rebuilds.
          </p>
        </div>
        <DesktopRail />
        <MobileRail />
        <div className="zc-feats zc-only-desktop">
          {features.map(([title, description, href]) => (
            <article key={href} className="zc-feat">
              <TextLink href={href}>{title}</TextLink>
              <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="zc-section" aria-labelledby="stack-title">
      <div className="zc-wrap">
        <div className="zc-split">
          <h2 className="zc-h2" id="stack-title">
            {'Keep your bundler.\nKeep your cloud.'}
          </h2>
          <p className="zc-section-lede zc-only-desktop">
            Zephyr is a plugin for the bundler you already use.
            <br />
            Start on the Zephyr managed cloud, or bring your own.
            <br />
            Your build and release steps stay the same.
          </p>
        </div>
        <div className="zc-stack zc-only-desktop">
          <StackColumn
            title="Bundler"
            packageLabel="Package"
            rows={bundlerRows}
          />
          <StackColumn
            title="Framework"
            packageLabel="Package"
            rows={frameworkRows}
          />
          <StackColumn title="Cloud" rows={cloudRows} />
        </div>
        <div className="zc-stack-m zc-only-mobile">
          <Link href="/getting-started/find-your-sdk">
            <span className="zc-stack-m-label">
              9 bundlers
              <ArrowRight className="zc-arrow" aria-hidden size={18} />
            </span>
            <p>
              Webpack, Rspack, Rsbuild, Vite, Rolldown,
              <br />
              Rollup, Parcel, Re.Pack, Metro
            </p>
          </Link>
          <Link href="/getting-started/find-your-sdk">
            <span className="zc-stack-m-label">
              8 frameworks
              <ArrowRight className="zc-arrow" aria-hidden size={18} />
            </span>
            <p>
              Astro, Ember.js, ModernJS, Nitro, Nuxt,
              <br />
              Rspress, Rslib, TanStack Start
            </p>
          </Link>
          <Link href="/cloud">
            <span className="zc-stack-m-label">
              5 clouds
              <ArrowRight className="zc-arrow" aria-hidden size={18} />
            </span>
            <p>
              Cloudflare, AWS, Fastly, Akamai,
              <br />
              Kubernetes (Enterprise)
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="zc-close" aria-labelledby="close-title">
      <div className="zc-wrap">
        <hr className="zc-rule" />
        <div className="zc-close-row">
          <div>
            <h2 className="zc-h2" id="close-title">
              <span className="zc-only-desktop">Start with one command.</span>
              <span className="zc-only-mobile">
                {'Start with\none command.'}
              </span>
            </h2>
            <p className="zc-help zc-only-desktop">
              Need help? The team answers questions on Discord.{' '}
              <TextLink href="https://discord.gg/zephyrcloud" external>
                Open Discord
              </TextLink>
            </p>
          </div>
          <BigCommand />
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  const rootRef = useRef<HTMLDivElement>(null);
  useKeyboardTabs(rootRef);
  return (
    <div className="zc-home" ref={rootRef}>
      <Opener />
      <CommandSection />
      <Paths />
      <Release />
      <Stack />
      <Close />
    </div>
  );
}
