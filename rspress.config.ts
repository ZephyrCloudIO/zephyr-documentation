import * as path from 'path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Zephyr Cloud Docs',
  description: 'Documentation site for Zephyr Cloud',
  icon: '/favicon.ico',
  logo: {
    light: '/logo-light.webp',
    dark: '/logo-dark.webp',
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
