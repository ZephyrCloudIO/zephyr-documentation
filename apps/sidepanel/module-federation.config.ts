import { createModuleFederationConfig } from '@module-federation/rspress-plugin';

export default createModuleFederationConfig({
  filename: 'remoteEntry.js',
  name: 'sidepanel_docs',
  exposes: {
    './App': './docs/index.md',
    './Guide': './docs/guide/index.md',
    './tools': './docs/tools.mdx',
    './browser-extension': './docs/how-to/browser-extension.mdx',
    './environments': './docs/how-to/environments.mdx',
    './version-statuses': './docs/how-to/version-statuses.mdx',
    './versioning-tags': './docs/how-to/versioning-tags.mdx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
