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
import type { RsbuildPlugin } from "@rsbuild/core"
import { createApplicationUID, ZephyrPluginOptions, ZeUploadAssetsOptions } from "../zephyr-mono/libs/zephyr-edge-contract/dist"
import { upload, getBuildId } from '../zephyr-mono/libs/zephyr-agent/dist';
import { withZephyr as ze } from "../zephyr-mono/libs/zephyr-webpack-plugin/dist"
import type { ModifyRspackConfigFn } from '@rsbuild/core';
import rspack, { Configuration as RspackConfiguration, Output, Asset } from "@rspack/core"
import type { Configuration } from "webpack"
import { after } from 'node:test';

interface ZephyrPartialInternalOptions {
  root: string;
  configFile: string;
  outDir: string;
  publicDir?: string;
}

const withZephyr = (_ZephyrInternalOption?: ZephyrPluginOptions): RsbuildPlugin => ({
  name: "zephyr-rspress-plugin",
  setup(api) {
    api.onAfterBuild(({ environments, isFirstCompile }) => {
      // let bundle: Output = {}
      const rspress_options = {} as ZephyrPartialInternalOptions
      const outputAssets: Asset[] = []
      const application_uid = createApplicationUID({
        org: "zmzlois",
        project: "zephyr-documentaion",
        name: "docs"
      })

      const build_id = getBuildId(application_uid)

      const config = api.getNormalizedConfig()


      Object.assign(rspress_options, {
        outputAssets,

      })

    })



  }
})
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
    text: 'Dashboard →',
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
      text: 'Error Codes',
      link: '/errors',
      collapsed: true,
      collapsible: true,
      items: Object.entries(Categories)
        .filter(([category]) => category !== 'unknown')
        .map(([category, value]) => ({
          text: capitalizeFirstLetter(category),
          collapsed: true,
          collapsible: true,
          // link: '/errors',
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

export default ze()({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation for Zephyr Cloud',
  icon: '/favicon.ico',
  lang: 'en-US',

  globalStyles: path.join(__dirname, 'styles/index.css'),
  mediumZoom: { selector: '.rspress-doc img' },

  logo: {
    light: '/logo-light.webp',
    dark: '/logo-dark.webp',
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
      docRepoBaseUrl: 'https://github.com/ZephyrCloudIO/zephyr-documentation',
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
    // @ts-expect-error ignore this for now
    fileTree(),
    // @ts-expect-error ignore this for now
    ga({
      id: 'G-B7G266JZDH',
    }),

  ],
});
