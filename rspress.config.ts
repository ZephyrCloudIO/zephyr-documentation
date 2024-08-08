import * as path from 'path';
import * as fs from "fs"
import { defineConfig } from 'rspress/config';
import { pluginShiki, createTransformerDiff, createTransformerLineNumber, createTransformerHighlight } from '@rspress/plugin-shiki';


const new_relic_script = fs.readFileSync('lib/utils/new-relic.js', 'utf-8')


export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation site for Zephyr Cloud',
  icon: '/favicon.ico',
  logo: {
    light: '/logo-light.webp',
    dark: '/logo-dark.webp',
  },
  search: {
    searchHooks: path.join(__dirname, 'lib/utils/after-search.ts')
  },

  globalStyles: path.join(__dirname, 'styles/index.css'),
  mediumZoom: {
    selector: '.rspress-doc img',
  },

  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,

    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zephyrcloudio' },
      { icon: 'discord', mode: 'link', content: 'https://discord.gg/EqFbSSt8Hx' },
      { icon: 'twitter', mode: 'link', content: 'https://twitter.com/ZephyrCloudIO' },
      { icon: 'linkedin', mode: 'link', content: 'https://www.linkedin.com/company/zephyr-cloud' },
    ],
  },

  markdown: {
    defaultWrapCode: true,
  },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: {
            type: 'text/javascript'
          },
          children: `${new_relic_script}`
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
          children:
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B7G266JZDH');`
        },

      ],
    },
  },
  plugins: [
    pluginShiki({
      transformers: [
        // Add as needed
        createTransformerDiff(),
        createTransformerLineNumber(),
        // createTransformerErrorLevel(),
        createTransformerHighlight(),
        // createTransformerFocus(),
      ],
    }),
  ],

});

