import { CloudflareIcon, NetlifyIcon, FastlyIcon, AkamaiIcon } from '@zephyr-docs/shared';
import { Search } from 'lucide-react';

const cloudProviders = [
  {
    name: 'AWS',
    icon: '🟠',
    href: '/cloud/aws',
    description: 'Amazon Web Services'
  },
  {
    name: 'Cloudflare',
    icon: <CloudflareIcon className="w-5 h-5" />,
    href: '/cloud/cloudflare',
    description: 'Cloudflare Workers & Pages'
  },
  {
    name: 'Netlify',
    icon: <NetlifyIcon className="w-5 h-5" />,
    href: '/cloud/netlify',
    description: 'Netlify Edge Functions'
  },
  {
    name: 'Fastly',
    icon: <FastlyIcon className="w-5 h-5" />,
    href: '/cloud/fastly',
    description: 'Fastly Compute@Edge'
  },
  {
    name: 'Akamai',
    icon: <AkamaiIcon className="w-5 h-5" />,
    href: '/cloud/akamai',
    description: 'Akamai EdgeWorkers'
  }
];

const quickLinks = [
  { name: 'Getting Started', href: '/cloud', icon: '🚀' },
  { name: 'Integration Setup', href: '/cloud/updating-integrations', icon: '🔧' },
  { name: 'BYOC Benefits', href: '/cloud#benefits', icon: '💡' },
  { name: 'Cost Calculator', href: '/cloud#pricing', icon: '💰' }
];

export function CloudSidebar() {
  return (
    <div className="w-80 h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <a
          href="/cloud"
          className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8">
            <img
              src="/dark-bg-icon.png"
              alt="Zephyr"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold">ZEPHYR DOCS <span className="text-blue-400">CLOUD</span></span>
        </a>

        {/* Search */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className="text-xs text-gray-400">⌘ + K</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
          Quick Start
        </h3>
        <div className="space-y-1">
          {quickLinks.map((link, index) => (
            <a
              key={`quick-link-${index}-${link.name}`}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors group"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Cloud Providers */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
            Supported Providers
          </h3>
          <div className="space-y-1">
            {cloudProviders.map((provider, index) => (
              <a
                key={`cloud-provider-${index}-${provider.name}`}
                href={provider.href}
                className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex items-center justify-center w-5 h-5">
                    {provider.icon}
                  </div>
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">
                    {provider.name}
                  </span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors ml-8">
                  {provider.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Link */}
      <div className="p-4 border-t border-gray-800 mt-auto">
        <a
          href="https://app.zephyr-cloud.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors group"
        >
          <span className="text-gray-300 group-hover:text-white">
            To Dashboard →
          </span>
        </a>
      </div>
    </div>
  );
}