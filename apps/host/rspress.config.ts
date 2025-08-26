import * as fs from "node:fs";
import * as path from "node:path";
import { pluginClientRedirects } from "@rspress/plugin-client-redirects";
import type { Nav, Sidebar, SocialLink } from "@rspress/shared";
import dotenv from "dotenv";
import ga from "rspress-plugin-google-analytics";
import sitemap from "rspress-plugin-sitemap";
import { defineConfig } from "@rspress/core";
// import { withZephyr } from "zephyr-rspack-plugin";
import { withZephyr } from "zephyr-rspress-plugin";
import { pluginModuleFederation } from "@module-federation/rspress-plugin";
import mfConfig from "./module-federation.config";

import { Categories } from "./lib/error-codes-messages";
import { PAGE_CODE_REGEX, getError as getZeError } from "./lib/error-helpers";

const TEMP_SEARCH_INDEX_PATH = path.join(__dirname, "temp-search-index.json");
const getSearchIndexHash = () => {
  let searchIndexHash = "";
  return {
    setHash: (hash: string) => {
      searchIndexHash = hash;
    },
    getHashedFilename: () =>
      `search_index.en-US${searchIndexHash ? `.${searchIndexHash}` : ""}.json`,
  };
};

const searchIndexHelper = getSearchIndexHash();

// const zephyrRsbuildPlugin = () => ({
//   name: "zephyr-rsbuild-plugin",
//   setup(api: {
//     // biome-ignore lint/suspicious/noExplicitAny: `modifyRspackConfig` is a valid method
//     modifyRspackConfig: (arg0: (config: any) => Promise<void>) => void;
//   }) {
//     api.modifyRspackConfig(async (config) => {
//       let searchIndexExists = false;
//       searchIndexExists = fs.existsSync(TEMP_SEARCH_INDEX_PATH);

//       config.name === "web" && (await withZephyr()(config));
//     });
//   },
// });

const twitterScript = fs.readFileSync("lib/scripts/twitter.js", "utf-8");

const socialLinks: SocialLink[] = [
  {
    icon: "github",
    mode: "link",
    content: "https://github.com/zephyrcloudio",
  },
  {
    icon: "discord",
    mode: "link",
    content: "https://zephyr-cloud.io/discord",
  },
  {
    icon: "x",
    mode: "link",
    content: "https://twitter.com/ZephyrCloudIO",
  },
];

const nav: Nav = [
  {
    text: "To Dashboard →",
    link: "https://app.zephyr-cloud.io",
  },
];

const sidebar: Sidebar = {
  "/": [
    {
      text: "Homepage",
      items: [
        {
          text: "Why Zephyr Cloud",
          link: "/general/why-zephyr-cloud",
        },
        {
          text: "Quick Start",
          link: "/general/get-started",
        },
        {
          text: "Key Features",
          link: "/usage",
        },
        {
          text: "Architecture Overview",
          link: "/general/architecture",
        },
      ],
    },
    {
      text: "Web",
      items: [
        {
          text: "Build Applications",
          link: "/build",
        },
        {
          text: "Developer Tools",
          link: "/tools",
        },
      ],
    },
    {
      text: "Mobile",
      items: [
        {
          text: "Mobile Development",
          link: "/mobile",
        },
      ],
    },
    {
      text: "Cloud",
      items: [
        {
          text: "Deploy to Cloud",
          link: "/deploy",
        },
        {
          text: "Cloud Providers",
          link: "/cloud",
        },
      ],
    },
    {
      text: "Learn",
      items: [
        {
          text: "Framework Recipes",
          link: "/recipes",
        },
        {
          text: "Learning Resources",
          link: "/general/resources",
        },
        {
          text: "FAQ",
          link: "/general/question",
        },
      ],
    },
    {
      text: "Reference",
      items: [
        {
          text: "Reference Documentation",
          link: "/reference",
        },
        {
          text: "Supported Platforms",
          link: "/supported",
        },
        {
          text: "Error Codes",
          link: "/errors",
        },
      ],
    },
  ],

  // Build section sidebar
  "/build": [
    {
      text: "Overview",
      items: [
        {
          text: "Build with Zephyr",
          link: "/build",
        },
      ],
    },
    {
      text: "Getting Started",
      items: [
        {
          text: "Create Your First App",
          link: "/general/create-mf-app",
        },
        {
          text: "Micro-Frontends Guide",
          link: "/how-to/mf-guide",
        },
        {
          text: "Dependency Management",
          link: "/how-to/dependency-management",
        },
      ],
    },
    {
      text: "Framework Recipes",
      items: [
        {
          text: "Existing App Integration",
          link: "/recipes/existing-app",
        },
        {
          text: "React + Vite",
          link: "/recipes/react-vite",
        },
        {
          text: "React + Rspack + Nx",
          link: "/recipes/react-rspack-nx",
        },
        {
          text: "Nx Module Federation",
          link: "/recipes/nx-mf-app",
        },
        {
          text: "Turborepo Setup",
          link: "/recipes/turborepo-react",
        },
        {
          text: "ModernJS",
          link: "/recipes/modernjs",
        },
        {
          text: "Multi-bundler Setup",
          link: "/recipes/vite-rspack-webpack-mf",
        },
      ],
    },
    {
      text: "Other Bundlers",
      items: [
        {
          text: "Parcel React",
          link: "/recipes/parcel-react",
        },
        {
          text: "Rolldown React",
          link: "/recipes/rolldown-react",
        },
        {
          text: "Rspress",
          link: "/recipes/rspress",
        },
      ],
    },
    {
      text: "Migration",
      items: [
        {
          text: "Webpack to Rspack (Nx)",
          link: "/how-to/migrate-nx-webpack-to-rspack",
        },
      ],
    },
  ],

  // Deploy section sidebar
  "/deploy": [
    {
      text: "Overview",
      items: [
        {
          text: "Deploy with Zephyr",
          link: "/deploy",
        },
        {
          text: "Cloud Providers Overview",
          link: "/cloud",
        },
      ],
    },
    {
      text: "Cloud Providers",
      items: [
        {
          text: "AWS",
          link: "/cloud/aws",
        },
        {
          text: "Cloudflare",
          link: "/cloud/cloudflare",
        },
        {
          text: "Netlify",
          link: "/cloud/netlify",
        },
        {
          text: "Akamai",
          link: "/cloud/akamai",
        },
        {
          text: "Fastly",
          link: "/cloud/fastly",
        },
      ],
    },
    {
      text: "Configuration",
      items: [
        {
          text: "Updating Integrations",
          link: "/cloud/updating-integrations",
        },
        {
          text: "Allow IP Addresses",
          link: "/how-to/allow-ip-addresses",
        },
      ],
    },
    {
      text: "Automation",
      items: [
        {
          text: "GitHub Automations",
          link: "/how-to/github-automations",
        },
        {
          text: "GitLab Automations",
          link: "/how-to/gitlab-automations",
        },
      ],
    },
  ],

  // Mobile section sidebar
  "/mobile": [
    {
      text: "Overview",
      items: [
        {
          text: "Mobile Development",
          link: "/mobile",
        },
      ],
    },
    {
      text: "React Native",
      items: [
        {
          text: "Overview",
          link: "/recipes/react-native",
        },
        {
          text: "Re.Pack Module Federation",
          link: "/recipes/repack-mf",
        },
      ],
    },
  ],

  // Tools section sidebar
  "/tools": [
    {
      text: "Overview",
      items: [
        {
          text: "Developer Tools",
          link: "/tools",
        },
      ],
    },
    {
      text: "Development Workflow",
      items: [
        {
          text: "Browser Extension",
          link: "/how-to/browser-extension",
        },
        {
          text: "Environments",
          link: "/how-to/environments",
        },
        {
          text: "Version Management",
          link: "/how-to/versioning-tags",
        },
        {
          text: "API Tokens",
          link: "/how-to/api-token",
        },
      ],
    },
    {
      text: "Testing & Examples",
      items: [
        {
          text: "Fork Examples",
          link: "/how-to/fork-our-examples",
        },
        {
          text: "End-to-end Testing",
          link: "/how-to/end-to-end-testing",
        },
      ],
    },
  ],

  // Reference section sidebar
  "/reference": [
    {
      text: "Overview",
      items: [
        {
          text: "Reference Documentation",
          link: "/reference",
        },
      ],
    },
    {
      text: "Platform Support",
      items: [
        {
          text: "Supported Platforms",
          link: "/supported",
        },
        {
          text: "Version Statuses",
          link: "/how-to/version-statuses",
        },
      ],
    },
    {
      text: "Resources",
      items: [
        {
          text: "Learning Resources",
          link: "/general/resources",
        },
        {
          text: "FAQ",
          link: "/general/question",
        },
      ],
    },
    {
      text: "Troubleshooting",
      items: [
        {
          text: "Build",
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: "ZE10010",
              link: "/errors/ze10010",
              description: "Package.json not found",
              label: "Package.json not found",
            },
            {
              text: "ZE10011",
              link: "/errors/ze10011",
              description: "Package.json is not in a valid json format.",
              label: "Package.json is not in a valid json format.",
            },
            {
              text: "ZE10012",
              link: "/errors/ze10012",
              description: "Webpack config error.",
              label: "Webpack config error.",
            },
            {
              text: "ZE10013",
              link: "/errors/ze10013",
              description: "Package.json must have a name and version field.",
              label: "Package.json must have a name and version field.",
            },
            {
              text: "ZE10014",
              link: "/errors/ze10014",
              description: "Git remote origin is not configured properly.",
              label: "Git remote origin is not configured properly.",
            },
            {
              text: "ZE10015",
              link: "/errors/ze10015",
              description: "Git username or email is not configured.",
              label: "Git username or email is not configured.",
            },
            {
              text: "ZE10016",
              link: "/errors/ze10016",
              description: "Could not get git info.",
              label: "Could not get git info.",
            },
            {
              text: "ZE10017",
              link: "/errors/ze10017",
              description: "`application_uid` missing.",
              label: "`application_uid` missing.",
            },
            {
              text: "ZE10018",
              link: "/errors/ze10018",
              description: "Auth error",
              label: "Auth error",
            },
            {
              text: "ZE10019",
              link: "/errors/ze10019",
              description: "Build error",
              label: "Build error",
            },
            {
              text: "ZE10020",
              link: "/errors/ze10020",
              description: "Bundle error",
              label: "Bundle error",
            },
            {
              text: "ZE10021",
              link: "/errors/ze10021",
              description: "Build process failed.",
              label: "Build process failed.",
            },
            {
              text: "ZE10028",
              link: "/errors/ze10028",
              description: "Missing dependency",
              label: "Missing dependency",
            },
            {
              text: "ZE10029",
              link: "/errors/ze10029",
              description: "Invalid configuration",
              label: "Invalid configuration",
            },
          ],
        },
        {
          text: "Deploy",
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: "ZE20010",
              link: "/errors/ze20010",
              description: "Deploy error",
              label: "Deploy error",
            },
            {
              text: "ZE20011",
              link: "/errors/ze20011",
              description: "Network error during deployment",
              label: "Network error during deployment",
            },
            {
              text: "ZE20012",
              link: "/errors/ze20012",
              description: "Permission denied",
              label: "Permission denied",
            },
            {
              text: "ZE20013",
              link: "/errors/ze20013",
              description: "Invalid deployment target",
              label: "Invalid deployment target",
            },
            {
              text: "ZE20014",
              link: "/errors/ze20014",
              description: "Deployment timeout",
              label: "Deployment timeout",
            },
            {
              text: "ZE20015",
              link: "/errors/ze20015",
              description: "Resource not found",
              label: "Resource not found",
            },
            {
              text: "ZE20016",
              link: "/errors/ze20016",
              description: "Configuration error",
              label: "Configuration error",
            },
            {
              text: "ZE20017",
              link: "/errors/ze20017",
              description: "Could not upload file to your Edge Provider",
              label: "Could not upload file to your Edge Provider",
            },
            {
              text: "ZE20018",
              link: "/errors/ze20018",
              description: "Service unavailable",
              label: "Service unavailable",
            },
            {
              text: "ZE20019",
              link: "/errors/ze20019",
              description: "Rate limit exceeded",
              label: "Rate limit exceeded",
            },
            {
              text: "ZE20020",
              link: "/errors/ze20020",
              description: "Authentication failed",
              label: "Authentication failed",
            },
            {
              text: "ZE20021",
              link: "/errors/ze20021",
              description: "Quota exceeded",
              label: "Quota exceeded",
            },
            {
              text: "ZE20022",
              link: "/errors/ze20022",
              description: "Invalid API key",
              label: "Invalid API key",
            },
            {
              text: "ZE20023",
              link: "/errors/ze20023",
              description: "Snapshot not found",
              label: "Snapshot not found",
            },
            {
              text: "ZE20024",
              link: "/errors/ze20024",
              description: "Version conflict",
              label: "Version conflict",
            },
            {
              text: "ZE20025",
              link: "/errors/ze20025",
              description: "Deployment rollback failed",
              label: "Deployment rollback failed",
            },
            {
              text: "ZE20027",
              link: "/errors/ze20027",
              description: "Health check failed",
              label: "Health check failed",
            },
          ],
        },
        {
          text: "Browser",
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: "ZE30026",
              link: "/errors/ze30026",
              description: "Browser extension error",
              label: "Browser extension error",
            },
          ],
        },
      ],
    },
  ],
};

dotenv.config();

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Zephyr Cloud Docs",
  description: "Documentation for Zephyr Cloud",
  icon: "/favicon.ico",
  lang: "en-US",
  ssg: true,
  globalStyles: path.join(__dirname, "styles/index.css"),
  mediumZoom: { selector: ".rspress-doc img" },

  logo: {
    light: "/light-bg-icon.png",
    dark: "/dark-bg-icon.png",
  },

  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,
    enableScrollToTop: true,
    lastUpdated: true,
    nav,
    sidebar,
    // socialLinks,
    editLink: {
      docRepoBaseUrl:
        "https://github.com/ZephyrCloudIO/zephyr-documentation/blob/main/docs",
      text: "Edit this page on GitHub",
    },
  },

  route: {
    cleanUrls: true,
  },

  builderConfig: {
    source: {
      define: {
        "process.env.PUBLIC_RSPRESS_INTERCOM_APP_ID": JSON.stringify(
          process.env.PUBLIC_RSPRESS_INTERCOM_APP_ID
        ),
      },
    },
    // plugins: [withZephyr()],
    output: {
      assetPrefix: "https://docs.zephyr-cloud.io/",
      copy: {
        patterns: [
          { from: "robots.txt" },
          { from: "sitemap.xml" },
          { from: "docs/public" },
          {
            from: "temp-search-index.json",
            to: () => `static/${searchIndexHelper.getHashedFilename()}`,
          },
        ],
      },
    },
    html: {
      tags: [
        {
          tag: "script",
          attrs: { type: "text/javascript" },
          children: twitterScript,
        },
      ],
    },
  },
  plugins: [
    // sitemap({ domain: "https://docs.zephyr-cloud.io" }),
    {
      name: "zephyr-search-enhancer",
      modifySearchIndexData(rows) {
        for (const row of rows) {
          const match = PAGE_CODE_REGEX.exec(row.routePath);
          if (!match) continue;

          const error = getZeError(match[1]);
          if (!error) {
            throw new Error(`Invalid error page found: ${match[1]}`);
          }

          // Adds to content because the indexer is not configured to
          // lookup the frontmatter data.
          // https://github.com/web-infra-dev/rspress/blob/d16b4b625c586e8d10385c792ade2a5d356834f3/packages/theme-default/src/components/Search/logic/providers/LocalProvider.ts#L78
          row.content = `ZE${Categories[error.kind]}${error.id}\n${
            error.message
          }\n\n\n${row.content}`;
        }

        const searchIndexData = JSON.stringify(rows);
        const staticDir = path.join(__dirname, "doc_build/static");

        if (fs.existsSync(staticDir)) {
          const files = fs.readdirSync(staticDir);
          for (const file of files) {
            const match = file.match(/search_index\.en-US\.([a-z0-9]+)\.json/);
            if (match) {
              searchIndexHelper.setHash(match[1]);
              break;
            }
          }
        }

        fs.writeFileSync(TEMP_SEARCH_INDEX_PATH, searchIndexData);
      },
    },
    // ga({
    //   id: "G-B7G266JZDH",
    // }),
    // pluginClientRedirects({
    //   redirects: [
    //     { from: "/how-to/cloud-providers", to: "/cloud" },
    //     { from: "^/guide/general/get-started", to: "/general/get-started" },
    //     {
    //       from: "^/concepts/architecture",
    //       to: "/general/architecture",
    //     },
    //     {
    //       from: "^/learning/concepts/architecture",
    //       to: "/general/architecture",
    //     },
    //     {
    //       from: "^/learning/resources",
    //       to: "/general/resources",
    //     },
    //     {
    //       from: "/guide/integrations/cloudflare",
    //       to: "/cloud/cloudflare",
    //     },
    //     {
    //       from: "/guide/integrations/netlify",
    //       to: "/cloud/netlify",
    //     },
    //   ],
    // }),
    pluginModuleFederation(mfConfig),
    // withZephyr(),
  ],
});
