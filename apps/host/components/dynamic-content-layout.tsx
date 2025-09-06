import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { HeroSection } from "./hero-section";
import { MFEContent } from "./mfe-content";

const mfeApps = [
  {
    name: "AI",
    badge: "BETA",
    docsUrl: "http://localhost:3001",
    examplesUrl:
      "https://github.com/zephyrcloudio/zephyr-examples/tree/main/ai",
    githubUrl: "https://github.com/zephyrcloudio/zephyr-ai",
  },
  {
    name: "Cloud",
    badge: null,
    docsUrl: "http://localhost:3002",
    examplesUrl:
      "https://github.com/zephyrcloudio/zephyr-examples/tree/main/cloud",
    githubUrl: "https://github.com/zephyrcloudio/zephyr-cloud",
  },
  {
    name: "Mobile",
    badge: "NEW",
    docsUrl: "http://localhost:3003",
    examplesUrl:
      "https://github.com/zephyrcloudio/zephyr-examples/tree/main/mobile",
    githubUrl: "https://github.com/zephyrcloudio/zephyr-mobile",
  },
  {
    name: "Sidepanel",
    badge: "ALPHA",
    docsUrl: "http://localhost:3004",
    examplesUrl:
      "https://github.com/zephyrcloudio/zephyr-examples/tree/main/sidepanel",
    githubUrl: "https://github.com/zephyrcloudio/zephyr-sidepanel",
  },
  {
    name: "Web",
    badge: null,
    docsUrl: "http://localhost:3005",
    examplesUrl:
      "https://github.com/zephyrcloudio/zephyr-examples/tree/main/web",
    githubUrl: "https://github.com/zephyrcloudio/zephyr-web",
  },
];

const socialItems = [
  { name: "Discord", href: "https://zephyr-cloud.io/discord" },
  { name: "GitHub", href: "https://github.com/zephyrcloudio" },
  { name: "Blog", href: "https://zephyr-cloud.io/blog" },
  { name: "Twitter", href: "https://twitter.com/ZephyrCloudIO" },
];

export function DynamicContentLayout() {
  const [selectedMfe, setSelectedMfe] = useState<string | null>(null);
  const [expandedMfe, setExpandedMfe] = useState<string | null>(null);

  const toggleMfe = (name: string) => {
    setExpandedMfe(expandedMfe === name ? null : name);
  };

  const selectMfe = (name: string) => {
    setSelectedMfe(name);
  };

  const goHome = () => {
    setSelectedMfe(null);
    setExpandedMfe(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-80 h-screen bg-gray-950 text-white flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <button
            onClick={goHome}
            className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8">
              <img
                src="/dark-bg-icon.png"
                alt="Zephyr"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold">ZEPHYR DOCS</span>
          </button>
          <div className="ml-auto">
            <div className="bg-gray-800 rounded-md px-2 py-1 text-xs text-gray-400">
              AUTO
            </div>
          </div>

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

        {/* MFE Apps Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {mfeApps.map((app) => (
              <div key={app.name} className="mb-1">
                <button
                  onClick={() => {
                    selectMfe(app.name);
                    toggleMfe(app.name);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors group ${
                    selectedMfe === app.name ? "bg-gray-800" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {expandedMfe === app.name ? (
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                      )}
                      <span className="text-cyan-400 group-hover:text-cyan-300 font-medium">
                        Ze
                      </span>
                    </div>
                    <span className="text-blue-400 font-medium group-hover:text-blue-300">
                      {app.name}
                    </span>
                  </div>
                  {app.badge && (
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        app.badge === "BETA"
                          ? "bg-blue-600 text-blue-100"
                          : app.badge === "NEW"
                            ? "bg-orange-600 text-orange-100"
                            : app.badge === "ALPHA"
                              ? "bg-green-600 text-green-100"
                              : "bg-gray-600 text-gray-100"
                      }`}
                    >
                      {app.badge}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {expandedMfe === app.name && (
                  <div className="ml-6 mt-1 space-y-1">
                    <a
                      href={
                        app.name === "AI"
                          ? "/ai-docs"
                          : `/${app.name.toLowerCase()}-docs`
                      }
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                    >
                      Documentation
                    </a>
                    <a
                      href={app.examplesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                    >
                      Examples
                    </a>
                    <a
                      href={app.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-4"></div>

          {/* Social Items */}
          <div className="p-4">
            {socialItems.map((item) => (
              <div key={item.name} className="mb-1">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors group"
                >
                  <span className="text-gray-300 group-hover:text-white">
                    {item.name}
                  </span>
                </a>
              </div>
            ))}
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
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-gray-900">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {selectedMfe ? (
            <MFEContent mfe={selectedMfe as any} />
          ) : (
            <HeroSection />
          )}
        </div>
      </main>
    </div>
  );
}
