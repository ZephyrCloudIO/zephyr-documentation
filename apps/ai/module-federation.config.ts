import { createModuleFederationConfig } from '@module-federation/rspress-plugin';

export default createModuleFederationConfig({
  filename: 'remoteEntry.js',
  name: 'ai_docs',
  exposes: {
    './intro': './docs/index.mdx',
    './hello': './docs/hello.mdx'
  },
});
