/* eslint-disable @typescript-eslint/no-var-requires */
//import { withZephyr } from "vite-plugin-zephyr"
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { CodeHikeConfig } from 'codehike/dist/mdx';
import fileTree from 'rspress-plugin-file-tree';
import ga from 'rspress-plugin-google-analytics';
import { defineConfig } from 'rspress/config';
import type { UserConfig } from 'rspress/config';
import { Categories, Errors } from './lib/error-codes-messages';
import { capitalizeFirstLetter } from './lib/utils/casing';
import { getError as getZeError, PAGE_CODE_REGEX } from './lib/error-helpers';


const newRelicScript = fs.readFileSync('lib/scripts/new-relic.js', 'utf-8');

const chConfig: CodeHikeConfig = {
  components: { code: 'Code' },
};

const socialLinks: UserConfig['themeConfig']['socialLinks'] = [
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
    icon: 'twitter',
    mode: 'link',
    content: 'https://twitter.com/ZephyrCloudIO',
  },
];

const nav: UserConfig['themeConfig']['nav'] = [
  {
    text: 'Zephyr Cloud →',
    link: 'https://app.zephyr-cloud.io',
  },
];

const sidebar: UserConfig['themeConfig']['sidebar'] = {
  '/': [
    {
      text: 'General',
      items: [
        {
          text: 'Why Zephyr Cloud',
          link: '/general/why-zephyr-cloud',
        },
        {
          text: 'Get Started',
          link: '/general/get-started',
        },
        {
          text: 'Create MF App',
          link: '/general/create-mf-app',
        },
        {
          text: 'Question',
          link: '/general/question',
        },
      ],
    },
    {
      text: 'How to',
      items: [
        {
          text: 'Cloud Providers',
          link: '/how-to/cloud-providers',
        },
        {
          text: 'React + Vite',
          link: '/how-to/react-vite',
        },
        {
          text: 'React + Rspack + Nx',
          link: '/how-to/react-rspack-nx',
        },
        {
          text: 'Nx MF App',
          link: '/how-to/nx-mf-app',
        },
        {
          text: 'Existing App',
          link: '/how-to/existing-app',
        },
      ],
    },
    {
      text: 'Concepts',
      link: '/concepts',
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: "Architecture",
          link: "/concepts/architecture"
        },

        {
          text: "Micro-Frontend",
          link: '/concepts/micro-frontend'
        },
        {
          text: "Module Federation",
          link: "/concepts/module-federation"
        }
      ]
    },
    {
      text: 'Resources',
      link: '/resources',
    },
    {
      text: 'Supported',
      link: '/supported',
    },
    {
      text: 'Recipes',
      link: '/recipes',
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
  lang: 'en-US',
  ssg: true,
  globalStyles: path.join(__dirname, 'styles/index.css'),
  mediumZoom: { selector: '.rspress-doc img' },

  logo: {
    light: '/light-bg-icon.png',
    dark: '/dark-bg-icon.png',
  },
  search: {
    searchHooks: path.join(__dirname, 'lib/utils/after-search.ts'),
  },

  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,
    enableScrollToTop: true,
    lastUpdated: true,
    nav,
    sidebar,
    socialLinks,
    editLink: {
      docRepoBaseUrl: 'https://github.com/ZephyrCloudIO/zephyr-documentation/blob/main/docs',
      text: 'Edit this page on GitHub',
    },
  },

  route: {
    cleanUrls: true,
  },

  markdown: {
    defaultWrapCode: false,
    remarkPlugins: [require('codehike/mdx').remarkPlugins, chConfig],
    // rehypePlugins: [require('codehike/mdx').rehypePlugins, chConfig],
    checkDeadLinks: true,
  },

  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: { type: 'text/javascript' },
          children: newRelicScript,
        },
      ],
    },
    plugins: [
      //  withZephyr()
    ]
  },

  plugins: [
    fileTree(),
    ga({
      id: 'G-B7G266JZDH',
    }),
    {
      name: 'zephyr-add-error-codes',
      modifySearchIndexData(rows) {
        for (const row of rows) {
          const match = PAGE_CODE_REGEX.exec(row.routePath);

          if (!match) {
            continue;
          }

          const error = getZeError(match[1]);

          if (!error) {
            throw new Error(`Invalid error page found: ${match[1]}`);
          }

          // Adds to content because the indexer is not configured to
          // lookup the frontmatter data.
          // https://github.com/web-infra-dev/rspress/blob/d16b4b625c586e8d10385c792ade2a5d356834f3/packages/theme-default/src/components/Search/logic/providers/LocalProvider.ts#L78
          row.content = `ZE${Categories[error.kind]}${error.id}\n${error.message
            }\n\n\n${row.content}`; // prepends to have higher priority
        }
      },
    },

  ],
});