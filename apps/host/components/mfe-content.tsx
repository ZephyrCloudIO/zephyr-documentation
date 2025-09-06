interface MFEContentProps {
  name: string;
  description: string;
  docsUrl: string;
  examplesUrl: string;
  githubUrl: string;
}

const mfeDetails = {
  AI: {
    name: "AI & Machine Learning",
    description:
      "Build intelligent micro-frontends with AI and machine learning capabilities.",
    features: [
      "LLM Integration",
      "Model Context Protocol",
      "AI-Powered Components",
      "Smart Routing",
    ],
    frameworks: ["React", "Vue", "Angular"],
    status: "Beta - Active Development",
  },
  Cloud: {
    name: "Cloud Infrastructure",
    description:
      "Deploy and scale your micro-frontends across global edge networks.",
    features: [
      "Edge Deployment",
      "Auto-scaling",
      "CDN Integration",
      "Multi-region Support",
    ],
    frameworks: ["AWS", "Cloudflare", "Netlify", "Vercel"],
    status: "Production Ready",
  },
  Mobile: {
    name: "Mobile Development",
    description:
      "Create cross-platform mobile applications with React Native and Module Federation.",
    features: [
      "React Native",
      "Module Federation",
      "Code Sharing",
      "Native Performance",
    ],
    frameworks: ["React Native", "Expo", "Re.Pack"],
    status: "New - Experimental",
  },
  Sidepanel: {
    name: "Browser Extensions",
    description:
      "Enhance developer workflow with powerful browser sidepanel tools.",
    features: [
      "Chrome Extension",
      "Dev Tools",
      "Live Reload",
      "Environment Management",
    ],
    frameworks: ["Chrome APIs", "WebExtensions", "React"],
    status: "Alpha - Early Access",
  },
  Web: {
    name: "Web Development",
    description:
      "Modern web application development with advanced bundling and optimization.",
    features: [
      "Module Federation",
      "Bundle Optimization",
      "Tree Shaking",
      "Code Splitting",
    ],
    frameworks: ["Webpack", "Vite", "Rspack", "Rollup"],
    status: "Production Ready",
  },
};

export function MFEContent({ mfe }: { mfe: keyof typeof mfeDetails }) {
  const details = mfeDetails[mfe];

  return (
    <div className="p-8 text-white max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-cyan-400">Ze</span> {mfe}
        </h1>
        <p className="text-2xl text-gray-300 leading-relaxed mb-6">
          {details.description}
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          {details.status}
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
        <div className="grid grid-cols-2 gap-4">
          {details.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Frameworks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Supported Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {details.frameworks.map((framework, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
            >
              {framework}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Quick Access</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="#"
            className="group block p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all"
          >
            <h3 className="text-lg font-semibold mb-2 text-white">
              Documentation
            </h3>
            <p className="text-blue-100 text-sm">
              Complete guides and references
            </p>
          </a>

          <a
            href="#"
            className="group block p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-lg hover:from-green-500 hover:to-green-600 transition-all"
          >
            <h3 className="text-lg font-semibold mb-2 text-white">Examples</h3>
            <p className="text-green-100 text-sm">Working code examples</p>
          </a>

          <a
            href="#"
            className="group block p-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all"
          >
            <h3 className="text-lg font-semibold mb-2 text-white">GitHub</h3>
            <p className="text-purple-100 text-sm">Source code and issues</p>
          </a>
        </div>
      </div>
    </div>
  );
}
