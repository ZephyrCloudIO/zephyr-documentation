import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginModuleFederation } from '@module-federation/rspress-plugin';
import mfConfig from './module-federation.config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AI Documentation',
  icon: '/rspress-icon.png',
  // base: '/ai/',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  builderConfig: {
    output: {
      assetPrefix: 'https://docs.zephyr-cloud.io/ai',
    },
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  plugins: [pluginModuleFederation(mfConfig)],
});
