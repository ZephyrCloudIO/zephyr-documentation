import * as path from 'path';
import { defineConfig } from 'rspress/config';
// import { withZephyr } from 'zephyr-webpack-plugin';
import { pluginShiki, createTransformerDiff, createTransformerLineNumber, createTransformerHighlight, createTransformerFocus } from '@rspress/plugin-shiki';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation site for Zephyr Cloud',
  icon: '/favicon.ico',
  logo: {
    light: '/logo-light.webp',
    dark: '/logo-dark.webp',
  },

  globalStyles: path.join(__dirname, 'styles/index.css'),
  lang: "en",
  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,
    locales: [
      {
        lang: "en",
        label: "English",
        outlineTitle: "On this page"
      }
      // ,
      // {
      //   lang: "zh",
      //   label: "",
      //   outlineTitle: ""
      // }
    ],
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zephyrcloudio' },
      { icon: 'discord', mode: 'link', content: 'https://discord.gg/EqFbSSt8Hx' },
      { icon: 'twitter', mode: 'link', content: 'https://twitter.com/ZephyrCloudIO' },
      { icon: 'linkedin', mode: 'link', content: 'https://www.linkedin.com/company/zephyr-cloud' },
    ],
  },
  locales: [
    {
      lang: "en",
      label: "English",
      title: "Zephyr Cloud Documentation",
      description: "Documentation for usage of Zephyr Cloud and related toolings."
    },
    // {
    //   lang: "zh",
    //   label: "简体中文",
    //   title: "Zephyr Cloud 文档",
    //   description: "关于如何使用Zephyr Cloud和相关工具"
    // }
  ],
  markdown: {
    defaultWrapCode: true,
  },
  builderConfig: {
    html: {
      tags: [
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
        }
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

