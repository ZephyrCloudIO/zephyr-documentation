// import * as fs from 'node:fs';
import * as path from 'node:path';
import { pluginClientRedirects } from '@rspress/plugin-client-redirects';
import type { Nav, Sidebar, SocialLink } from '@rspress/shared';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';
// import { pluginLlms } from '@rspress/plugin-llms';
import { pluginAlgolia } from '@rspress/plugin-algolia';
// import ga from 'rspress-plugin-google-analytics';
// import readingTime from 'rspress-plugin-reading-time';
import { pluginSitemap } from '@rspress/plugin-sitemap';
import { defineConfig } from '@rspress/core';
// import { withZephyr } from 'zephyr-rspack-plugin';
import { withZephyr } from 'zephyr-rsbuild-plugin';

import { Categories, Errors } from './lib/error-codes-messages';
// import { PAGE_CODE_REGEX, getError as getZeError } from './lib/error-helpers';
import { capitalizeFirstLetter } from './lib/utils/casing';

// const TEMP_SEARCH_INDEX_PATH = path.join(__dirname, 'temp-search-index.json');
const getSearchIndexHash = () => {
  let searchIndexHash = '';
  return {
    setHash: (hash: string) => {
      searchIndexHash = hash;
    },
    getHashedFilename: () =>
      `search_index.en-US${searchIndexHash ? `.${searchIndexHash}` : ''}.json`,
  };
};

const searchIndexHelper = getSearchIndexHash();

// const zephyrRsbuildPlugin = () => ({
//   name: 'zephyr-rsbuild-plugin',
//   setup(api: {
//     // biome-ignore lint/suspicious/noExplicitAny: `modifyRspackConfig` is a valid method
//     modifyRspackConfig: (arg0: (config: any) => Promise<void>) => void;
//   }) {
//     api.modifyRspackConfig(async (config) => {
//       config.name === 'web' && (await withZephyr()(config));
//     });
//   },
// });

const socialLinks: SocialLink[] = [
  {
    icon: 'github',
    mode: 'link',
    content: 'https://github.com/zephyrcloudio',
  },
  {
    icon: 'discord',
    mode: 'link',
    content: 'https://zephyr-cloud.io/discord',
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
          text: 'CI/CD',
          link: '/features/ci-cd',
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
        // TODO: Uncomment and add when Metro is working
        // {
        //   text: "Metro (React Native)",
        //   link: "/bundlers/metro",
        // },
      ],
    },
    {
      text: 'Meta Frameworks',
      collapsible: true,
      items: [
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
          text: 'Core Concepts',
          link: '/reference/concepts',
        },
        {
          text: 'Version Statuses',
          link: '/reference/version-statuses',
        },
        {
          text: 'FAQ',
          link: '/reference/faq',
        },
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
  ssg: false,
  globalStyles: path.join(__dirname, 'styles/index.css'),
  mediumZoom: { selector: '.rspress-doc img' },
  logo: {
    light: '/light-bg-icon.png',
    dark: '/dark-bg-icon.png',
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
      text: 'Edit this page on GitHub',
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
        image: 'https://docs.zephyr-cloud.io/dark-bg-logo.png',
        description:
          'Documentation for Zephyr Cloud - The developer-first SaaS platform for Module Federation, micro-frontends, and modern web applications.',
        twitter: {
          site: '@ZephyrCloudIO',
          card: 'summary_large_image',
        },
      }),
      withZephyr(),
    ],
    output: {
      copy: {
        patterns: [
          { from: 'docs/public' },
          {
            from: 'temp-search-index.json',
            to: () => `static/${searchIndexHelper.getHashedFilename()}`,
          },
        ],
      },
    },
  },
  // ? Rsbuild Plugins

  plugins: [
    pluginSitemap({ siteUrl: 'https://docs.zephyr-cloud.io' }),
    // pluginLlms(), // Temporarily disabled due to bug with nav.default
    // readingTime(),
    pluginAlgolia(),
    // {
    //   name: 'zephyr-search-enhancer',
    //   modifySearchIndexData(rows) {
    //     for (const row of rows) {
    //       const match = PAGE_CODE_REGEX.exec(row.routePath);
    //       if (!match) continue;

    //       const error = getZeError(match[1]);
    //       if (!error) {
    //         throw new Error(`Invalid error page found: ${match[1]}`);
    //       }

    //       // Adds to content because the indexer is not configured to
    //       // lookup the frontmatter data.
    //       // https://github.com/web-infra-dev/rspress/blob/d16b4b625c586e8d10385c792ade2a5d356834f3/packages/theme-default/src/components/Search/logic/providers/LocalProvider.ts#L78
    //       row.content = `ZE${Categories[error.kind]}${error.id}\n${
    //         error.message
    //       }\n\n\n${row.content}`;
    //     }

    //     const searchIndexData = JSON.stringify(rows);
    //     const staticDir = path.join(__dirname, 'doc_build/static');

    //     if (fs.existsSync(staticDir)) {
    //       const files = fs.readdirSync(staticDir);
    //       for (const file of files) {
    //         const match = file.match(/search_index\.en-US\.([a-z0-9]+)\.json/);
    //         if (match) {
    //           searchIndexHelper.setHash(match[1]);
    //           break;
    //         }
    //       }
    //     }

    //     fs.writeFileSync(TEMP_SEARCH_INDEX_PATH, searchIndexData);
    //   },
    // },
    // ga({
    //   id: 'G-B7G266JZDH',
    // }),
    pluginClientRedirects({
      redirects: [
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
      ],
    }),
  ],
});
