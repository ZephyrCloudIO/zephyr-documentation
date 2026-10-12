import { Link } from '@rspress/core/theme';

const year = new Date().getFullYear();

const columns = [
  {
    title: 'Docs',
    links: [
      { label: 'Quick start', href: '/getting-started/quick-start' },
      { label: 'Bundlers', href: '/bundlers/webpack' },
      { label: 'Cloud providers', href: '/cloud' },
      { label: 'Troubleshooting', href: '/errors' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: 'https://discord.gg/zephyrcloud' },
      { label: 'GitHub', href: 'https://github.com/zephyrcloudio' },
      { label: 'X', href: 'https://twitter.com/ZephyrCloudIO' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/zephyr-cloud',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Blog', href: 'https://zephyr-cloud.io/blog' },
      { label: 'Pricing', href: 'https://zephyr-cloud.io/pricing' },
      { label: 'Contact', href: 'https://zephyr-cloud.io/contact' },
      { label: 'System status', href: 'https://status.zephyr-cloud.io/' },
    ],
  },
];

const isExternal = (href: string) => href.startsWith('http');

const FooterLink = ({ label, href }: { label: string; href: string }) =>
  isExternal(href) ? (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  ) : (
    <Link href={href}>{label}</Link>
  );

/** Full site footer, shown on the landing and 404 pages. */
export const Footer = () => (
  <footer className="zc-footer">
    <div className="zc-container grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div className="flex flex-col gap-3">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/light-bg-icon.webp"
            alt=""
            className="h-6 w-6 dark:hidden"
          />
          <img
            src="/dark-bg-icon.webp"
            alt=""
            className="hidden h-6 w-6 dark:block"
          />
          <span className="font-semibold text-[var(--rp-c-text-1)]">
            Zephyr Cloud
          </span>
        </Link>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--rp-c-text-3)]">
          The Module Federation platform for shipping micro-frontends to any
          cloud.
        </p>
      </div>
      {columns.map((column) => (
        <nav key={column.title} aria-label={column.title}>
          <p className="mb-4 text-sm font-semibold text-[var(--rp-c-text-1)]">
            {column.title}
          </p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {column.links.map((link) => (
              <li key={link.href}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
    <div className="zc-container border-t border-[var(--rp-c-divider-light)] py-6 text-xs text-[var(--rp-c-text-3)]">
      © {year} Zephyr Cloud. All rights reserved.
    </div>
  </footer>
);

/** Compact footer rendered under each doc page's prev/next navigation. */
export const DocFooter = () => (
  <div className="zc-doc-footer">
    <span>© {year} Zephyr Cloud</span>
    <span className="flex flex-wrap gap-4">
      <a href="https://discord.gg/zephyrcloud" target="_blank" rel="noreferrer">
        Discord
      </a>
      <a
        href="https://status.zephyr-cloud.io/"
        target="_blank"
        rel="noreferrer"
      >
        System status
      </a>
      <a href="https://zephyr-cloud.io/blog" target="_blank" rel="noreferrer">
        Blog
      </a>
    </span>
  </div>
);
