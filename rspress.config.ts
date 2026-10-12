import * as path from 'node:path';
import { pluginClientRedirects } from '@rspress/plugin-client-redirects';
import type { Nav, Sidebar, SocialLink } from '@rspress/shared';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';

import { pluginLlms } from '@rspress/plugin-llms';
import { pluginAlgolia } from '@rspress/plugin-algolia';
import pluginMermaid from 'rspress-plugin-mermaid';
import { pluginSitemap } from '@rspress/plugin-sitemap';
import { defineConfig, type RspressPlugin } from '@rspress/core';
import {
  BookOpen,
  Boxes,
  Bug,
  CircleHelp,
  Cloud,
  Compass,
  GraduationCap,
  Layers,
  LifeBuoy,
  ListChecks,
  PanelRight,
  Plug,
  Puzzle,
  Rocket,
  Sparkles,
  SquareTerminal,
  Wand,
} from 'lucide-static';
import { withZephyr } from 'zephyr-rspress-plugin';

import { Categories, Errors } from './lib/error-codes-messages';
import { capitalizeFirstLetter } from './lib/utils/casing';

const socialLinks: SocialLink[] = [
  {
    icon: 'github',
    mode: 'link',
    content: 'https://github.com/zephyrcloudio',
  },
  {
    icon: 'discord',
    mode: 'link',
    content: 'https://discord.gg/zephyrcloud',
  },
  {
    icon: 'x',
    mode: 'link',
    content: 'https://twitter.com/ZephyrCloudIO',
  },
];

const nav: Nav = [
  {
    text: 'Guide',
    link: '/getting-started/introduction',
    activeMatch: '^/(getting-started|features|migrations|tools)/',
  },
  {
    text: 'Integrations',
    items: [
      { text: 'Bundlers', link: '/bundlers/webpack' },
      { text: 'Meta Frameworks', link: '/meta-frameworks/astro' },
      { text: 'Cloud Providers', link: '/cloud' },
      { text: 'Integration Guides', link: '/integrations/react-vite' },
    ],
  },
  {
    text: 'Tutorials',
    link: '/tutorials/first-app',
    activeMatch: '^/tutorials/',
  },
  {
    text: 'Reference',
    link: '/reference/declarative-configuration',
    activeMatch: '^/(reference|errors)',
  },
  {
    text: 'Resources',
    items: [
      {
        text: 'Changelog',
        link: 'https://github.com/ZephyrCloudIO/zephyr-packages/releases',
      },
      { text: 'Blog', link: 'https://zephyr-cloud.io/blog' },
      { text: 'Pricing', link: 'https://zephyr-cloud.io/pricing' },
      { text: 'System status', link: 'https://status.zephyr-cloud.io/' },
    ],
  },
  {
    text: 'Dashboard',
    link: 'https://app.zephyr-cloud.io',
  },
];

const errorGroups = Object.entries(Categories)
  .filter(([category]) => category !== 'unknown')
  .map(([category, value]) => ({
    text: capitalizeFirstLetter(category),
    collapsed: true,
    collapsible: true,
    items: Object.values(Errors)
      .filter((error) => error.kind === category)
      .map((error) => ({
        text: `ZE${value}${error.id}`,
        link: `/errors/ze${value}${error.id}`,
      })),
  }));

const sidebar: Sidebar = {
  '/': [
    { sectionHeaderText: 'Getting Started' },
    {
      text: 'Introduction',
      link: '/getting-started/introduction',
      icon: BookOpen,
    },
    {
      text: 'Quick Start',
      link: '/getting-started/quick-start',
      icon: Rocket,
    },
    {
      text: 'Prerequisites',
      link: '/getting-started/installation',
      icon: ListChecks,
    },
    {
      text: 'Find Your SDK',
      link: '/getting-started/find-your-sdk',
      icon: Compass,
    },
    {
      text: 'Zephyr API MCP',
      link: '/tools/api-mcp',
      icon: Sparkles,
      tag: 'new',
    },
    {
      text: 'FAQ',
      link: '/getting-started/faq',
      icon: CircleHelp,
    },

    { sectionHeaderText: 'Deployments' },
    { text: 'Versions', link: '/features/versions' },
    { text: 'Version Statuses', link: '/features/version-statuses' },
    { text: 'Tags & Environments', link: '/features/tags-environments' },
    {
      text: 'Locking Tags & Environments',
      link: '/features/locking-tags-environments',
    },
    { text: 'Instant Rollbacks', link: '/features/instant-rollbacks' },
    {
      text: 'Environment Overrides',
      link: '/features/environment-overrides',
    },
    { text: 'Remote Dependencies', link: '/features/remote-dependencies' },
    { text: 'Deployment Hooks', link: '/features/deployment-hooks' },
    { text: 'Structured File Logs', link: '/features/file-logging' },
    {
      text: 'React Native OTA Updates',
      link: '/features/react-native-ota-updates',
      tag: 'beta',
    },

    { sectionHeaderText: 'CI/CD' },
    { text: 'CI Tokens', link: '/features/ci-tokens', tag: 'new' },
    { text: 'CI/CD Automation', link: '/features/automation' },
    {
      text: 'Migrate to CI tokens',
      link: '/migrations/ci-token-migration',
    },
    {
      text: 'Personal tokens',
      link: '/features/ci-cd-personal-token',
      tag: 'deprecated',
    },
    {
      text: 'Server tokens',
      link: '/features/ci-cd-server-token',
      tag: 'deprecated',
    },

    { sectionHeaderText: 'Organization' },
    {
      text: 'Organization Structure',
      link: '/features/organization-structure',
    },
    { text: 'Teams & Members', link: '/features/teams-members' },
    { text: 'Subscriptions', link: '/features/subscriptions' },
    {
      text: 'Multi-Organization Subscriptions',
      link: '/features/multi-organization-subscriptions',
    },

    { sectionHeaderText: 'Guides' },
    {
      text: 'Bundlers',
      icon: Boxes,
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Webpack', link: '/bundlers/webpack' },
        { text: 'Rspack', link: '/bundlers/rspack' },
        { text: 'Rsbuild', link: '/bundlers/rsbuild' },
        { text: 'Vite', link: '/bundlers/vite' },
        { text: 'Rolldown', link: '/bundlers/rolldown' },
        { text: 'Rollup', link: '/bundlers/rollup' },
        { text: 'Parcel', link: '/bundlers/parcel' },
        { text: 'Re.Pack (React Native)', link: '/bundlers/repack' },
        { text: 'Metro (React Native)', link: '/bundlers/metro' },
      ],
    },
    {
      text: 'Meta Frameworks',
      icon: Layers,
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Astro', link: '/meta-frameworks/astro' },
        { text: 'Ember.js', link: '/meta-frameworks/emberjs' },
        { text: 'ModernJS', link: '/meta-frameworks/modernjs' },
        { text: 'Nitro', link: '/meta-frameworks/nitro' },
        { text: 'Nuxt', link: '/meta-frameworks/nuxt' },
        { text: 'Rspress', link: '/meta-frameworks/rspress' },
        { text: 'Rslib', link: '/meta-frameworks/rslib' },
        { text: 'TanStack Start', link: '/meta-frameworks/tanstack-start' },
      ],
    },
    {
      text: 'Cloud Providers',
      link: '/cloud',
      icon: Cloud,
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Akamai', link: '/cloud/akamai' },
        { text: 'AWS', link: '/cloud/aws' },
        { text: 'Cloudflare', link: '/cloud/cloudflare' },
        { text: 'Fastly', link: '/cloud/fastly' },
        { text: 'Kubernetes', link: '/cloud/kubernetes' },
        { text: 'Updating Integrations', link: '/cloud/updating-integrations' },
      ],
    },
    {
      text: 'Integration Guides',
      icon: Plug,
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'React + Vite', link: '/integrations/react-vite' },
        { text: 'React + Rsbuild', link: '/integrations/react-rsbuild' },
        {
          text: 'React + Rspack + Nx',
          link: '/integrations/react-rspack-nx',
        },
        {
          text: 'React Native + Re.Pack',
          link: '/integrations/react-native-repack',
        },
        {
          text: 'Multi-bundler Setup',
          link: '/integrations/vite-rspack-webpack-mf',
        },
        {
          text: 'Existing App Migration',
          link: '/integrations/existing-app',
        },
      ],
    },
    {
      text: 'Tutorials',
      icon: GraduationCap,
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Your First App', link: '/tutorials/first-app' },
        { text: 'Adding Micro-Frontends', link: '/tutorials/create-mf-app' },
        { text: 'Complete MF Guide', link: '/tutorials/mf-guide' },
        {
          text: 'Rsbuild MF Monorepo',
          link: '/tutorials/rsbuild-react-mf-monorepo',
        },
        { text: 'React Native with Metro', link: '/tutorials/metro' },
        { text: 'End-to-End Testing', link: '/tutorials/e2e-testing' },
      ],
    },

    { sectionHeaderText: 'Tools' },
    {
      text: 'create-zephyr-apps',
      link: '/tools/create-zephyr-apps',
      icon: SquareTerminal,
    },
    { text: 'Zephyr Codemod', link: '/tools/zephyr-codemod', icon: Wand },
    {
      text: 'Zephyr Sidepanel',
      link: '/tools/browser-extension',
      icon: PanelRight,
    },
    { text: 'Zephyr Devtools', link: '/tools/browser-devtools', icon: Bug },
    {
      text: 'Module Federation Devtools',
      link: '/tools/module-federation-devtools',
      icon: Puzzle,
    },

    { sectionHeaderText: 'Reference' },
    {
      text: 'Declarative Configuration',
      link: '/reference/declarative-configuration',
    },
    { text: 'Architecture', link: '/reference/architecture' },
    { text: 'Why Zephyr Cloud', link: '/reference/why-zephyr-cloud' },
    { text: 'SSR Worker', link: '/reference/ssr-worker', tag: 'beta' },
    { text: 'IP Allowlists', link: '/reference/allow-ip-addresses' },
    { text: 'Additional Resources', link: '/reference/resources' },
    {
      text: 'Troubleshooting',
      link: '/errors',
      icon: LifeBuoy,
      collapsible: true,
      collapsed: true,
      items: errorGroups,
    },
  ],
};

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation for Zephyr Cloud',
  icon: '/favicon.ico',
  lang: 'en',
  ssg: true,
  globalStyles: path.join(__dirname, 'styles/index.css'),
  mediumZoom: { selector: '.rspress-doc img' },
  logo: {
    light: '/light-bg-icon.webp',
    dark: '/dark-bg-icon.webp',
  },
  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,
    enableScrollToTop: true,
    lastUpdated: true,
    nav: nav,
    sidebar,
    socialLinks,
    editLink: {
      docRepoBaseUrl:
        'https://github.com/ZephyrCloudIO/zephyr-documentation/blob/main/docs',
    },
  },

  route: {
    cleanUrls: true,
  },

  builderConfig: {
    source: {
      define: {
        'process.env.PUBLIC_POSTHOG_KEY': JSON.stringify(
          process.env.PUBLIC_POSTHOG_KEY,
        ),
        'process.env.PUBLIC_POSTHOG_HOST': JSON.stringify(
          process.env.PUBLIC_POSTHOG_HOST,
        ),
      },
    },
    plugins: [
      pluginOpenGraph({
        title: 'Zephyr Cloud Docs',
        type: 'website',
        url: 'https://docs.zephyr-cloud.io/',
        image: 'https://docs.zephyr-cloud.io/dark-bg-logo.webp',
        description:
          'Documentation for Zephyr Cloud - The developer-first SaaS platform for Module Federation, micro-frontends, and modern web applications.',
        twitter: {
          site: '@ZephyrCloudIO',
          card: 'summary_large_image',
        },
      }),
    ],
    output: {
      copy: {
        patterns: [{ from: 'docs/public' }],
      },
    },
  },
  plugins: [
    pluginSitemap({ siteUrl: 'https://docs.zephyr-cloud.io' }),
    pluginLlms(),
    pluginAlgolia(),
    pluginMermaid({
      mermaidConfig: {
        theme: 'dark',
      },
    }),
    pluginClientRedirects({
      redirects: [
        // Legacy/removed error doc pages
        { from: '/errors/ze10028', to: '/errors/ze00000' },
        { from: '^/errors/ZE10028$', to: '/errors/ze00000' },
        // Removed error doc pages (not emitted/returned by current code)
        { from: '/errors/ze10012', to: '/errors/ze00000' },
        { from: '^/errors/ZE10012$', to: '/errors/ze00000' },
        { from: '/errors/ze10020', to: '/errors/ze00000' },
        { from: '^/errors/ZE10020$', to: '/errors/ze00000' },
        { from: '/errors/ze10021', to: '/errors/ze00000' },
        { from: '^/errors/ZE10021$', to: '/errors/ze00000' },
        { from: '/errors/ze10029', to: '/errors/ze00000' },
        { from: '^/errors/ZE10029$', to: '/errors/ze00000' },
        { from: '/errors/ze10030', to: '/errors/ze00000' },
        { from: '^/errors/ZE10030$', to: '/errors/ze00000' },
        { from: '/errors/ze10031', to: '/errors/ze00000' },
        { from: '^/errors/ZE10031$', to: '/errors/ze00000' },
        { from: '/errors/ze10034', to: '/errors/ze00000' },
        { from: '^/errors/ZE10034$', to: '/errors/ze00000' },
        { from: '/errors/ze10035', to: '/errors/ze00000' },
        { from: '^/errors/ZE10035$', to: '/errors/ze00000' },
        { from: '/errors/ze10036', to: '/errors/ze00000' },
        { from: '^/errors/ZE10036$', to: '/errors/ze00000' },
        { from: '/errors/ze20015', to: '/errors/ze00000' },
        { from: '^/errors/ZE20015$', to: '/errors/ze00000' },
        { from: '/errors/ze20016', to: '/errors/ze00000' },
        { from: '^/errors/ZE20016$', to: '/errors/ze00000' },
        { from: '/errors/ze20018', to: '/errors/ze00000' },
        { from: '^/errors/ZE20018$', to: '/errors/ze00000' },
        { from: '/errors/ze20021', to: '/errors/ze00000' },
        { from: '^/errors/ZE20021$', to: '/errors/ze00000' },
        { from: '/errors/ze20025', to: '/errors/ze00000' },
        { from: '^/errors/ZE20025$', to: '/errors/ze00000' },
        { from: '/errors/ze20027', to: '/errors/ze00000' },
        { from: '^/errors/ZE20027$', to: '/errors/ze00000' },
        { from: '/errors/ze20034', to: '/errors/ze00000' },
        { from: '^/errors/ZE20034$', to: '/errors/ze00000' },
        { from: '/errors/ze20036', to: '/errors/ze00000' },
        { from: '^/errors/ZE20036$', to: '/errors/ze00000' },
        { from: '/errors/ze40004', to: '/errors/ze00000' },
        { from: '^/errors/ZE40004$', to: '/errors/ze00000' },
        { from: '/how-to/cloud-providers', to: '/cloud' },
        {
          from: '^/guide/general/get-started',
          to: '/getting-started/quick-start',
        },
        { from: '^/general/get-started', to: '/getting-started/quick-start' },
        { from: '^/general/architecture', to: '/reference/architecture' },
        { from: '^/general/resources', to: '/reference/resources' },
        { from: '^/how-to/existing-app', to: '/integrations/existing-app' },
        {
          from: '^/concepts/architecture',
          to: '/reference/architecture',
        },
        {
          from: '^/learning/concepts/architecture',
          to: '/reference/architecture',
        },
        {
          from: '^/learning/resources',
          to: '/reference/resources',
        },
        {
          from: '/guide/integrations/cloudflare',
          to: '/cloud/cloudflare',
        },
        {
          from: '/recipes/react-vite',
          to: '/bundlers/vite',
        },
      ],
    }),
    // zephyr-rspress-plugin types its config hook against its own copy of the
    // Rspress config shape, so it does not structurally match @rspress/core.
    withZephyr() as unknown as RspressPlugin,
  ],
});
