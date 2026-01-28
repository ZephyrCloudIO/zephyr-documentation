import * as path from 'node:path';
import { pluginClientRedirects } from '@rspress/plugin-client-redirects';
import type { Nav, Sidebar, SocialLink } from '@rspress/shared';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { pluginLlms } from '@rspress/plugin-llms';
import { pluginAlgolia } from '@rspress/plugin-algolia';
import pluginMermaid from 'rspress-plugin-mermaid';
import { pluginSitemap } from '@rspress/plugin-sitemap';
import { defineConfig } from '@rspress/core';
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
    text: 'Zephyr Cloud →',
    link: 'https://app.zephyr-cloud.io',
  },
];

const sidebar: Sidebar = {
  '/': [
    {
      text: 'Getting Started',
      items: [
        {
          text: 'Overview',
          link: '/',
        },
        {
          text: 'Prerequisites',
          link: '/getting-started/installation',
        },
        {
          text: 'Quick Start',
          link: '/getting-started/quick-start',
        },
        {
          text: 'FAQ',
          link: '/getting-started/faq',
        },
      ],
    },
    {
      text: 'Features & Workflows',
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: 'Organization Structure',
          link: '/features/organization-structure',
        },
        {
          text: 'Versions',
          link: '/features/versions',
        },
        {
          text: 'Version Statuses',
          link: '/features/version-statuses',
        },
        {
          text: 'Tags & Environments',
          link: '/features/tags-environments',
        },
        {
          text: 'Instant Rollbacks',
          link: '/features/instant-rollbacks',
        },
        {
          text: 'Remote Dependencies',
          link: '/features/remote-dependencies',
        },
        {
          text: 'Deployment Hooks',
          link: '/features/deployment-hooks',
        },
        {
          text: 'Structured File Logs',
          link: '/features/file-logging',
        },
        {
          text: 'CI/CD - Personal token',
          link: '/features/ci-cd-personal-token',
        },
        {
          text: 'CI/CD - Server token',
          link: '/features/ci-cd-server-token',
        },
        {
          text: 'Environment Overrides',
          link: '/features/environment-overrides',
        },
        {
          text: 'Teams & Members',
          link: '/features/teams-members',
        },
        {
          text: 'Subscriptions',
          link: '/features/subscriptions',
        },
      ],
    },
    {
      text: 'Development Tools',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'create-zephyr-apps',
          link: '/tools/create-zephyr-apps',
        },
        {
          text: 'Zephyr Codemod',
          link: '/tools/zephyr-codemod',
        },
        {
          text: 'Zephyr Sidepanel',
          link: '/tools/browser-extension',
        },
        {
          text: 'Zephyr Devtools',
          link: '/tools/browser-devtools',
        },
        {
          text: 'Module Federation Devtools',
          link: '/tools/module-federation-devtools',
        },
      ],
    },
    {
      text: 'Bundler Guides',
      collapsible: true,
      items: [
        {
          text: 'Webpack',
          link: '/bundlers/webpack',
        },
        {
          text: 'Rspack',
          link: '/bundlers/rspack',
        },
        {
          text: 'Rsbuild',
          link: '/bundlers/rsbuild',
        },
        {
          text: 'Vite',
          link: '/bundlers/vite',
        },
        {
          text: 'Rolldown',
          link: '/bundlers/rolldown',
        },
        {
          text: 'Rollup',
          link: '/bundlers/rollup',
        },
        {
          text: 'Parcel',
          link: '/bundlers/parcel',
        },
        {
          text: 'Re.Pack (React Native)',
          link: '/bundlers/repack',
        },
        {
          text: 'Metro (React Native)',
          link: '/bundlers/metro',
        },
      ],
    },
    {
      text: 'Meta Frameworks',
      collapsible: true,
      items: [
        {
          text: 'Astro',
          link: '/meta-frameworks/astro',
        },
        {
          text: 'Ember.js',
          link: '/meta-frameworks/emberjs',
        },
        {
          text: 'ModernJS',
          link: '/meta-frameworks/modernjs',
        },
        {
          text: 'Rspress',
          link: '/meta-frameworks/rspress',
        },
        {
          text: 'Rslib',
          link: '/meta-frameworks/rslib',
        },
        {
          text: 'TanStack Start',
          link: '/meta-frameworks/tanstack-start',
        },
      ],
    },
    {
      text: 'Cloud Providers',
      link: '/cloud',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Akamai',
          link: '/cloud/akamai',
        },
        {
          text: 'AWS',
          link: '/cloud/aws',
        },
        {
          text: 'Cloudflare',
          link: '/cloud/cloudflare',
        },
        {
          text: 'Fastly',
          link: '/cloud/fastly',
        },
        {
          text: 'Netlify',
          link: '/cloud/netlify',
        },
        {
          text: 'Kubernetes',
          link: '/cloud/kubernetes',
        },
        {
          text: 'Updating Integrations',
          link: '/cloud/updating-integrations',
        },
      ],
    },
    {
      text: 'Integration Guides',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'React + Vite',
          link: '/integrations/react-vite',
        },
        {
          text: 'React + Rsbuild',
          link: '/integrations/react-rsbuild',
        },
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
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Your First App',
          link: '/tutorials/first-app',
        },
        {
          text: 'Adding Micro-Frontends',
          link: '/tutorials/create-mf-app',
        },
        {
          text: 'Complete MF Guide',
          link: '/tutorials/mf-guide',
        },
        {
          text: 'React Native with Metro',
          link: '/tutorials/metro',
        },
        {
          text: 'End-to-End Testing',
          link: '/tutorials/e2e-testing',
        },
      ],
    },
    {
      text: 'Reference',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Additional Resources',
          link: '/reference/resources',
        },
        {
          text: 'Why Zephyr Cloud',
          link: '/reference/why-zephyr-cloud',
        },
        {
          text: 'Architecture',
          link: '/reference/architecture',
        },
        {
          text: 'SSR Worker (beta)',
          link: '/reference/ssr-worker',
        },
        {
          text: 'IP Allowlists',
          link: '/reference/allow-ip-addresses',
        },
      ],
    },
    {
      text: 'Troubleshooting',
      link: '/errors',
      collapsed: true,
      collapsible: true,
      items: Object.entries(Categories)
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
              description: error.message,
              label: error.message,
            })),
        })),
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
        'process.env.PUBLIC_RSPRESS_INTERCOM_APP_ID': JSON.stringify(
          process.env.PUBLIC_RSPRESS_INTERCOM_APP_ID,
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
      pluginGoogleAnalytics({
        id: 'G-B7G266JZDH',
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
        { from: '^/guide/general/get-started', to: '/general/get-started' },
        {
          from: '^/concepts/architecture',
          to: '/general/architecture',
        },
        {
          from: '^/learning/concepts/architecture',
          to: '/general/architecture',
        },
        {
          from: '^/learning/resources',
          to: '/general/resources',
        },
        {
          from: '/guide/integrations/cloudflare',
          to: '/cloud/cloudflare',
        },
        {
          from: '/guide/integrations/netlify',
          to: '/cloud/netlify',
        },
        {
          from: '/recipes/react-vite',
          to: '/bundlers/vite',
        },
      ],
    }),
    withZephyr(),
  ],
});
