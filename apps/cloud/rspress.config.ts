import { defineConfig, UserConfig } from '@rspress/core';
import { pluginModuleFederation } from '@module-federation/rspress-plugin';
import mfConfig from './module-federation.config';
import path from "node:path"

const config: UserConfig = defineConfig({
  root: 'docs',
  title: 'Zephyr Cloud Documentation',
  description:
    'Comprehensive documentation for Zephyr Cloud - Build, deploy, and manage your micro-frontends with ease.',
  icon: '/favicon.ico',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  builderConfig: {
    output: {
      distPath: {
        root: '../dist',
      },
    },
  },
  logo: {
    light: '/light-bg-logo.png',
    dark: '/dark-bg-logo.png',
  },
  themeConfig: {
    footer: {
      message: 'Made with ❤️ by the Module Federation Team',
    },
    nav: [
      {
        text: 'Cloud Overview',
        link: '/cloud',
        activeMatch: '^/cloud$',
      },
      {
        text: 'Providers',
        link: '/cloud/cloudflare',
        activeMatch: '^/cloud/',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Overview',
          items: [
            {
              text: 'Cloud Providers Overview',
              link: '/cloud',
            },
          ],
        },
        {
          text: 'Cloud Providers',
          items: [
            {
              text: 'AWS',
              link: '/cloud/aws',
            },
            {
              text: 'Cloudflare',
              link: '/cloud/cloudflare',
            },
            {
              text: 'Netlify',
              link: '/cloud/netlify',
            },
            {
              text: 'Akamai',
              link: '/cloud/akamai',
            },
            {
              text: 'Fastly',
              link: '/cloud/fastly',
            },
          ],
        },
        {
          text: 'Configuration',
          items: [
            {
              text: 'Updating Integrations',
              link: '/cloud/updating-integrations',
            },
          ],
        },
      ],
    },
  },
  plugins: [pluginModuleFederation(mfConfig)],
});

export default config;
