/* eslint-disable @typescript-eslint/no-var-requires */

import * as path from 'node:path';
import * as fs from 'node:fs';
import { defineConfig } from 'rspress/config';
import { Categories, Errors } from './lib/error-codes-messages';
import { capitalizeFirstLetter } from './lib/utils/casing';
import type { CodeHikeConfig } from 'codehike/dist/mdx';
import type { UserConfig } from 'rspress/config';

const newRelicScript = fs.readFileSync('lib/scripts/new-relic.js', 'utf-8');
const gtagScript = fs.readFileSync('lib/scripts/gtag.js', 'utf-8');

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
  {
    icon: 'linkedin',
    mode: 'link',
    content: 'https://www.linkedin.com/company/zephyr-cloud',
  },
];

const nav: UserConfig['themeConfig']['nav'] = [
  {
    text: 'Get Started',
    link: './general/get-started',
  },
  {
    text: 'Troubleshoot',
    link: './errors',
  },
  {
    text: 'GO TO DASHBOARD',
    link: 'https://app.zephyr-cloud.io',
  },
];

// [
//   {
//     "type": "dir",
//     "name": "general",
//     "label": "General",
//     "collapsible": true,
//     "collapsed": false
//   },
//   {
//     "type": "dir",
//     "name": "how-to",
//     "label": "How-to",
//     "collapsible": false,
//     "collapsed": false
//   },
//   {
//     "type": "dir",
//     "name": "error",
//     "label": "Trouble Shooting",
//     "collapsible": true,
//     "collapsed": "true"
//   },
//   "resources",
//   "supported"
// ]

[
  'why-zephyr-cloud',
  'get-started',
  'architecture',
  'create-mf-app',
  'question',
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
          text: 'Architecture',
          link: '/general/architecture',
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
      text: 'Resources',
      link: '/resources',
    },
    {
      text: 'Supported',
      link: '/supported',
    },
  ],
  '/errors': Object.entries(Categories)
    .filter(([category]) => category !== 'unknown')
    .map(([category, value]) => ({
      text: capitalizeFirstLetter(category),
      collapsed: true,
      collapsible: true,
      link: '/errors',
      items: Object.values(Errors)
        .filter((error) => error.kind === category)
        .map((error) => ({
          text: `ZE${value}${error.id}`,
          link: `/errors/ZE${value}${error.id}`,
          description: error.message,
          label: error.message,
        })),
    })),
};

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation for Zephyr Cloud',
  icon: '/favicon.ico',
  logo: {
    light: '/logo-light.webp',
    dark: '/logo-dark.webp',
  },
  search: {
    searchHooks: path.join(__dirname, 'lib/utils/after-search.ts'),
  },
  globalStyles: path.join(__dirname, 'styles/index.css'),
  mediumZoom: { selector: '.rspress-doc img' },
  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,
    enableScrollToTop: true,
    lastUpdated: true,
    editLink: {
      docRepoBaseUrl: 'https://github.com/ZephyrCloudIO/zephyr-documentation',
      text: 'Edit this page on GitHub',
    },
    socialLinks,
    nav,
    sidebar,
    outlineTitle: 'You are here',
  },

  markdown: {
    defaultWrapCode: true,
    remarkPlugins: [require('codehike/mdx').remarkPlugins, chConfig],
    rehypePlugins: [require('codehike/mdx').rehypePlugins, chConfig],
    checkDeadLinks: true,
    highlightLanguages: ['bash', 'json', 'yaml', 'typescript', 'javascript'],
  },

  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: { type: 'text/javascript' },
          children: newRelicScript,
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-B7G266JZDH',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'text/javascript' },
          children: gtagScript,
        },
      ],
    },
  },
});
