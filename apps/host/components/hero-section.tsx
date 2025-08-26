export function HeroSection() {
  return (
    <div className="text-center py-20 text-white">
      {/* Logo/Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-white font-bold text-3xl">Z</span>
        </div>
        <div className="text-6xl font-bold text-white mb-4">ZEPHYR</div>
      </div>

      {/* Hero Text */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        High-Quality Open-Source
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Micro-Frontend Tools
        </span>
      </h1>

      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        Headless, TypeScript-first, and Framework Agnostic tools for building
        Web Applications, Mobile Apps, and Advanced Data Visualization with
        Module Federation.
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-12 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-2">
            📦 <span>12+</span>
          </div>
          <div className="text-sm text-gray-400">Bundler Plugins</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-2">
            ⭐ <span>2.8K+</span>
          </div>
          <div className="text-sm text-gray-400">Stars on GitHub</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mb-16">
        <a
          href="/general/get-started"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get Started
        </a>
        <a
          href="/apps"
          className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Explore Apps →
        </a>
      </div>

      {/* Featured Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Open Source Libraries
        </h2>
        <h3 className="text-xl font-semibold text-gray-300 mb-12">
          Data And State Management
        </h3>

        {/* Library Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Zephyr Start */}
          <div className="bg-gray-800 rounded-xl p-8 text-left shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium">
                ZEPHYR
              </div>
              <span className="text-xl font-bold text-white">START</span>
            </div>
            <p className="text-blue-400 font-medium mb-3">
              Full-stack Framework powered by Module Federation for React and
              Solid
            </p>
            <p className="text-gray-300 text-sm">
              Full-document SSR, Streaming, Server Functions, bundling and more,
              powered by Zephyr Cloud...
            </p>
          </div>

          {/* Zephyr Router */}
          <div className="bg-gray-800 rounded-xl p-8 text-left shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">
                ZEPHYR
              </div>
              <span className="text-xl font-bold text-white">ROUTER</span>
            </div>
            <p className="text-green-400 font-medium mb-3">
              Type-safe Routing for Module Federation applications
            </p>
            <p className="text-gray-300 text-sm">
              A powerful React micro-frontend router with first-class search
              params, type-safe navigation and full stack applications. Fully...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
