import { createModuleFederationConfig } from '@module-federation/rspress-plugin';

export default createModuleFederationConfig({
  filename: 'remoteEntry.js',
  name: 'cloud_docs',
  exposes: {
    // Main cloud documentation entry points
    './CloudDocs': './docs/index.mdx',
    './CloudOverview': './docs/cloud.mdx',
    
    // Cloud provider specific documentation
    './CloudProviders': './docs/cloud',
    './CloudflareProvider': './docs/cloud/cloudflare.mdx',
    './NetlifyProvider': './docs/cloud/netlify.mdx',
    './AWSProvider': './docs/cloud/aws.mdx',
    './AkamaiProvider': './docs/cloud/akamai.mdx',
    './FastlyProvider': './docs/cloud/fastly.mdx',
    
    // Cloud management and operations
    './UpdatingIntegrations': './docs/cloud/updating-integrations.mdx',
  },
});
