import { createModuleFederationConfig } from '@module-federation/rspress-plugin';

export default createModuleFederationConfig({
  filename: 'remoteEntry.js',
  name: 'cloud_docs',
  exposes: {
    './intro': './docs/index.md',
    './guide': './docs/guide/index.md',
    './hello': './docs/hello.md',
    './cloud': './docs/cloud.mdx',
    './deploy': './docs/deploy.mdx',
    './cloudflare': './docs/cloud/cloudflare.mdx',
    './netlify': './docs/cloud/netlify.mdx',
    './aws': './docs/cloud/aws.mdx',
    './akamai': './docs/cloud/akamai.mdx',
    './fastly': './docs/cloud/fastly.mdx',
    './updating-integrations': './docs/cloud/updating-integrations.mdx',
  },
});
