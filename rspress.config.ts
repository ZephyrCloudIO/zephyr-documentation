import * as path from 'path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation site for Zephyr Cloud',
  icon: '/favicon.ico',
  // TODO: We need a Zephyr Cloud Icon
  logo: {
    // TODO: We need to create a logo with "Zephyr Cloud Docs" or some text
    light: '/zephyr-logo.png',
    dark: '/zephyr-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {icon: 'github', mode: 'link', content: 'https://github.com/zephyrcloudio'},
      {icon: 'discord', mode: 'link', content: 'https://discord.gg/EqFbSSt8Hx'},
      {icon: 'twitter', mode: 'link', content: 'https://twitter.com/ZephyrCloudIO'},
      {icon: 'linkedin', mode: 'link', content: 'https://www.linkedin.com/company/zephyr-cloud'},
    ],
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
          attrs: {
            async: true,
            src: 'https://buttons.github.io/buttons.js',
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
});
