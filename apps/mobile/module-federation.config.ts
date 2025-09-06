import { createModuleFederationConfig } from '@module-federation/rspress-plugin';

export default createModuleFederationConfig({
  filename: 'remoteEntry.js',
  name: 'mobile_docs',
  exposes: {
    './intro': './docs/index.md',
    './guide': './docs/guide/index.md',
    './hello': './docs/hello.md',
    './mobile': './docs/mobile.mdx',
    './react-native': './docs/recipes/react-native.mdx',
    './react-native-bootstrapping':
      './docs/recipes/react-native/bootstrapping-your-native-application.mdx',
    './react-native-host': './docs/recipes/react-native/configuring-host.mdx',
    './react-native-remote':
      './docs/recipes/react-native/configuring-remote.mdx',
    './react-native-ios': './docs/recipes/react-native/rspack-ios-setup.mdx',
    './react-native-state':
      './docs/recipes/react-native/state-manager-sharing-between-react-native-applications.mdx',
    './repack-mf': './docs/recipes/repack-mf.mdx',
  },
});
