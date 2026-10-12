import { Link } from '@rspress/core/theme';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  GitBranch,
  History,
  Lock,
  Network,
  Smartphone,
  Sparkles,
  Tags,
} from 'lucide-react';
import { type ReactNode, useState } from 'react';

import { AkamaiIcon } from '../icons/akamai';
import { AWSIcon } from '../icons/aws';
import { CloudflareIcon } from '../icons/cloudflare';
import { EmberIcon } from '../icons/ember';
import { FastlyIcon } from '../icons/fastly';
import { KubernetesIcon } from '../icons/kubernetes';
import { ModernjsIcon } from '../icons/modernjs';
import { ParcelIcon } from '../icons/parcel';
import { ReactIcon } from '../icons/react';
import { RepackIcon } from '../icons/repack';
import { RolldownIcon } from '../icons/rolldown';
import { RollupIcon } from '../icons/rollup';
import { RsbuildIcon } from '../icons/rsbuild';
import { RslibIcon } from '../icons/rslib';
import { RspackIcon } from '../icons/rspack';
import { RspressIcon } from '../icons/rspress';
import { ViteIcon } from '../icons/vite';
import { WebpackIcon } from '../icons/webpack';
import { McpPromo } from '../mcp-promo';
import { cn } from '../../lib/cn';

const commands = [
  { label: 'Existing app', command: 'npx with-zephyr' },
  { label: 'New app', command: 'npx create-zephyr-apps@latest' },
];

const features = [
  {
    icon: GitBranch,
    title: 'Immutable versions',
    description:
      'Every build becomes a permanent snapshot with its own preview URL, so you can test real deployments before anyone else sees them.',
    href: '/features/versions',
  },
  {
    icon: Tags,
    title: 'Tags & environments',
    description:
      'Promote versions through staging and production with rule-based tags and custom domains.',
    href: '/features/tags-environments',
  },
  {
    icon: History,
    title: 'Instant rollbacks',
    description:
      'Switch traffic back to a version already running on the edge. No rebuild, no upload, no waiting.',
    href: '/features/instant-rollbacks',
  },
  {
    icon: Network,
    title: 'Remote dependencies',
    description:
      'Resolve Module Federation remotes at build time instead of hard-coding URLs and coordinating versions by hand.',
    href: '/features/remote-dependencies',
  },
  {
    icon: Lock,
    title: 'Locked environments',
    description:
      'Freeze production after a release so no deployment or config change lands until someone unlocks it.',
    href: '/features/locking-tags-environments',
  },
  {
    icon: Smartphone,
    title: 'React Native OTA',
    description:
      'Ship Metro Module Federation bundles to installed apps without another App Store or Play Store release.',
    href: '/features/react-native-ota-updates',
    tag: 'Beta',
  },
];

type StackItem = { name: string; href: string; icon?: ReactNode };

const iconClass = 'h-6 w-6';

const stacks: { id: string; label: string; items: StackItem[] }[] = [
  {
    id: 'bundlers',
    label: 'Bundlers',
    items: [
      {
        name: 'Webpack',
        href: '/bundlers/webpack',
        icon: <WebpackIcon className={iconClass} />,
      },
      {
        name: 'Rspack',
        href: '/bundlers/rspack',
        icon: <RspackIcon className={iconClass} />,
      },
      {
        name: 'Rsbuild',
        href: '/bundlers/rsbuild',
        icon: <RsbuildIcon className={iconClass} />,
      },
      {
        name: 'Vite',
        href: '/bundlers/vite',
        icon: <ViteIcon className={iconClass} />,
      },
      {
        name: 'Rolldown',
        href: '/bundlers/rolldown',
        icon: <RolldownIcon className={iconClass} />,
      },
      {
        name: 'Rollup',
        href: '/bundlers/rollup',
        icon: <RollupIcon className={iconClass} />,
      },
      {
        name: 'Parcel',
        href: '/bundlers/parcel',
        icon: <ParcelIcon className={iconClass} />,
      },
      {
        name: 'Re.Pack',
        href: '/bundlers/repack',
        icon: <RepackIcon className={iconClass} />,
      },
      {
        name: 'Metro',
        href: '/bundlers/metro',
        icon: <ReactIcon className={iconClass} />,
      },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    items: [
      { name: 'Astro', href: '/meta-frameworks/astro' },
      {
        name: 'Ember.js',
        href: '/meta-frameworks/emberjs',
        icon: <EmberIcon className={iconClass} />,
      },
      {
        name: 'ModernJS',
        href: '/meta-frameworks/modernjs',
        icon: <ModernjsIcon className={iconClass} />,
      },
      { name: 'Nitro', href: '/meta-frameworks/nitro' },
      { name: 'Nuxt', href: '/meta-frameworks/nuxt' },
      {
        name: 'Rspress',
        href: '/meta-frameworks/rspress',
        icon: <RspressIcon className={iconClass} />,
      },
      {
        name: 'Rslib',
        href: '/meta-frameworks/rslib',
        icon: <RslibIcon className={iconClass} />,
      },
      { name: 'TanStack Start', href: '/meta-frameworks/tanstack-start' },
    ],
  },
  {
    id: 'clouds',
    label: 'Clouds',
    items: [
      {
        name: 'Cloudflare',
        href: '/cloud/cloudflare',
        icon: <CloudflareIcon className={iconClass} />,
      },
      {
        name: 'AWS',
        href: '/cloud/aws',
        icon: <AWSIcon className={iconClass} />,
      },
      {
        name: 'Fastly',
        href: '/cloud/fastly',
        icon: <FastlyIcon className={iconClass} />,
      },
      {
        name: 'Akamai',
        href: '/cloud/akamai',
        icon: <AkamaiIcon className={iconClass} />,
      },
      {
        name: 'Kubernetes',
        href: '/cloud/kubernetes',
        icon: <KubernetesIcon className={iconClass} />,
      },
    ],
  },
];

function CommandCopy({ label, command }: { label: string; command: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="zc-command group"
      aria-label={`Copy "${command}"`}
      onClick={() => {
        void navigator.clipboard.writeText(command);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      <span className="zc-command__label">{label}</span>
      <span aria-hidden="true" className="text-[var(--rp-c-text-3)]">
        $
      </span>
      <code>{command}</code>
      <span className="zc-command__icon" aria-hidden="true">
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied' : ''}
      </span>
    </button>
  );
}

function TerminalPreview() {
  return (
    <div className="zc-terminal" aria-hidden="true">
      <div className="zc-terminal__bar">
        <span />
        <span />
        <span />
        <p>~/acme/cart</p>
      </div>
      <div className="zc-terminal__body">
        <p>
          <span className="text-zinc-500">$</span> npm run build
        </p>
        <p className="text-zinc-500">✓ built in 1.84s</p>
        <p>
          <span className="zc-ze">ZEPHYR</span> Building to{' '}
          <span className="text-cyan-300">cart.shop.acme</span>
          <span className="text-amber-200">#142</span>
        </p>
        <p>
          <span className="zc-ze">ZEPHYR</span> Uploaded{' '}
          <span className="text-amber-200">3</span> new assets in{' '}
          <span className="text-amber-200">412</span>ms
        </p>
        <p>
          <span className="zc-ze">ZEPHYR</span> Deployed to edge in{' '}
          <span className="text-emerald-300">1.2s</span>
        </p>
        <p className="pl-4 text-sky-300 underline decoration-sky-300/40 underline-offset-4">
          https://ana-142-cart-shop-acme-ze.zephyr-cloud.io
        </p>
        <p className="mt-3 flex items-center gap-2">
          <span className="text-zinc-500">$</span>
          <span className="zc-caret" />
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="zc-hero">
      <div className="zc-hero__glow" aria-hidden="true" />
      <div className="zc-container grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col items-start">
          <Link href="/tools/api-mcp" className="zc-pill">
            <Sparkles size={14} className="text-[var(--rp-c-brand)]" />
            <span>New: manage deployments from your AI assistant</span>
            <ArrowRight size={14} />
          </Link>

          <h1 className="zc-hero__title">
            Ship micro&#8209;frontends to the edge{' '}
            <span className="zc-gradient-text">in seconds</span>
          </h1>

          <p className="zc-hero__lead">
            Zephyr Cloud turns every build into an immutable version with its
            own preview URL. It wires up Module Federation for you, resolves
            remote dependencies, and rolls back instantly, with any bundler on
            any cloud.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/getting-started/quick-start"
              className="zc-button zc-button--primary"
            >
              Get started
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/getting-started/introduction"
              className="zc-button zc-button--ghost"
            >
              How it works
            </Link>
          </div>

          <div className="mt-6 flex w-full max-w-md flex-col gap-2">
            {commands.map((item) => (
              <CommandCopy key={item.command} {...item} />
            ))}
          </div>
        </div>

        <TerminalPreview />
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="zc-eyebrow">{eyebrow}</p>
      <h2 className="zc-section-title">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--rp-c-text-2)]">
        {description}
      </p>
    </div>
  );
}

function Features() {
  return (
    <section className="zc-section">
      <div className="zc-container">
        <SectionHeading
          eyebrow="Platform"
          title="Everything between build and production"
          description="Zephyr hooks into the bundler you already use, so deployment becomes a side effect of your build."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, href, tag }) => (
            <li key={href}>
              <Link href={href} className="zc-feature group">
                <span className="zc-feature__icon">
                  <Icon size={20} />
                </span>
                <span className="flex items-center gap-2 text-base font-semibold text-[var(--rp-c-text-1)]">
                  {title}
                  {tag && <span className="zc-tag">{tag}</span>}
                </span>
                <span className="text-sm leading-relaxed text-[var(--rp-c-text-2)]">
                  {description}
                </span>
                <span className="zc-feature__more">
                  Learn more
                  <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stack() {
  const [active, setActive] = useState(stacks[0].id);
  const current = stacks.find((stack) => stack.id === active) ?? stacks[0];

  return (
    <section className="zc-section">
      <div className="zc-container">
        <SectionHeading
          eyebrow="Agnostic by design"
          title="Bring your own stack"
          description="Pick the bundler, framework, and cloud you already trust. Switch any of them later without rewriting your deployment pipeline."
        />

        <div
          role="tablist"
          aria-label="Supported integrations"
          className="mx-auto mb-8 flex w-fit gap-1 rounded-full border border-[var(--zc-border)] bg-[var(--zc-surface)] p-1"
        >
          {stacks.map((stack) => (
            <button
              key={stack.id}
              type="button"
              role="tab"
              id={`stack-tab-${stack.id}`}
              aria-selected={stack.id === active}
              aria-controls="stack-panel"
              onClick={() => setActive(stack.id)}
              className={cn(
                'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                stack.id === active
                  ? 'bg-[var(--rp-c-text-1)] text-[var(--rp-c-bg)]'
                  : 'text-[var(--rp-c-text-2)] hover:text-[var(--rp-c-text-1)]',
              )}
            >
              {stack.label}
            </button>
          ))}
        </div>

        <ul
          id="stack-panel"
          role="tabpanel"
          aria-labelledby={`stack-tab-${current.id}`}
          className="flex flex-wrap justify-center gap-3"
        >
          {current.items.map((item) => (
            <li
              key={item.href}
              className="w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(20%-9.6px)]"
            >
              <Link href={item.href} className="zc-stack-tile">
                <span className="zc-stack-tile__logo">
                  {item.icon ?? (
                    <span className="text-sm font-semibold">
                      {item.name.slice(0, 2)}
                    </span>
                  )}
                </span>
                <span className="text-sm font-medium text-[var(--rp-c-text-1)]">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Ai() {
  return (
    <section className="zc-section">
      <div className="zc-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="zc-eyebrow">Zephyr API MCP</p>
          <h2 className="zc-section-title text-left">
            Let your AI assistant deploy, promote, and roll back
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--rp-c-text-2)]">
            Connect Claude Code, Codex, Cursor, Gemini, or VS Code to Zephyr.
            Your assistant can inspect deployments and move versions between
            environments, using the account and permissions you already have.
          </p>
          <Link
            href="/tools/api-mcp"
            className="zc-button zc-button--ghost mt-8"
          >
            Read the MCP guide
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="zc-mcp-panel">
          <McpPromo />
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="zc-section pb-24">
      <div className="zc-container">
        <div className="zc-cta">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--rp-c-text-1)] sm:text-3xl">
              Deploy your first app in a few minutes
            </h2>
            <p className="mt-3 max-w-xl text-[var(--rp-c-text-2)]">
              Start from a template or add Zephyr to the app you already have.
              Stuck? The team hangs out on Discord.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/getting-started/quick-start"
              className="zc-button zc-button--primary"
            >
              Quick start
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://app.zephyr-cloud.io"
              target="_blank"
              rel="noreferrer"
              className="zc-button zc-button--ghost"
            >
              Open dashboard
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  return (
    <div className="zc-landing">
      <Hero />
      <Features />
      <Stack />
      <Ai />
      <CallToAction />
    </div>
  );
}
