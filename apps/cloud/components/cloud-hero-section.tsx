import { CloudProviderCards } from './cloud-provider';
import {
  CloudflareIcon,
  NetlifyIcon,
  FastlyIcon,
  AkamaiIcon,
} from '@zephyr-docs/shared';

export function CloudHeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-8 py-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl">☁️</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zephyr Cloud
            </span>
          </h1>

          <p className="text-2xl text-slate-300 mb-4 font-light">
            Deploy with Your Own Cloud
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Bring Your Own Cloud (BYOC) - Use your existing cloud infrastructure
            with Zephyr's powerful deployment platform. No vendor lock-in, full
            control over your resources.
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-slate-300">Cloud Providers</div>
              <div className="text-sm text-slate-500 mt-1">
                AWS, Cloudflare, Netlify & more
              </div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-slate-300">Your Infrastructure</div>
              <div className="text-sm text-slate-500 mt-1">
                Full control & ownership
              </div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">0</div>
              <div className="text-slate-300">Vendor Lock-in</div>
              <div className="text-sm text-slate-500 mt-1">
                Switch providers anytime
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cloud"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <span>🚀</span>
              Get Started
            </a>
            <a
              href="/cloud/updating-integrations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all"
            >
              <span>🔧</span>
              Setup Integration
            </a>
          </div>
        </div>

        {/* Featured Cloud Providers */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Supported Cloud Providers
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose from our growing list of supported cloud providers. Each
              integration is designed to leverage your provider's unique
              features and global infrastructure.
            </p>
          </div>

          {/* Provider Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🟠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    AWS
                  </h3>
                  <p className="text-sm text-slate-400">Amazon Web Services</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Deploy to AWS Lambda, CloudFront, and S3 with full CDN
                integration.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <CloudflareIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Cloudflare
                  </h3>
                  <p className="text-sm text-slate-400">Workers & Pages</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Leverage Cloudflare's global edge network with Workers and
                Pages.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <NetlifyIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Netlify
                  </h3>
                  <p className="text-sm text-slate-400">Edge Functions</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Deploy with Netlify's powerful edge functions and instant
                deployments.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <FastlyIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Fastly
                  </h3>
                  <p className="text-sm text-slate-400">Compute@Edge</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                High-performance edge computing with Fastly's global network.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <AkamaiIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Akamai
                  </h3>
                  <p className="text-sm text-slate-400">EdgeWorkers</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Enterprise-grade edge computing with Akamai's trusted
                infrastructure.
              </p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">➕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    More Coming
                  </h3>
                  <p className="text-sm text-slate-400">Request a provider</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Don't see your provider? Let us know and we'll add support.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Choose BYOC?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Cost Control</h4>
                <p className="text-sm text-slate-400">
                  Use your existing cloud credits and billing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Security</h4>
                <p className="text-sm text-slate-400">
                  Data stays in your cloud environment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Performance</h4>
                <p className="text-sm text-slate-400">
                  Leverage your provider's global CDN
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Flexibility</h4>
                <p className="text-sm text-slate-400">
                  Switch providers without vendor lock-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
