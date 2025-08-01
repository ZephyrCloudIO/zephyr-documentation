import * as fs from "node:fs";
import * as path from "node:path";
import { pluginClientRedirects } from "@rspress/plugin-client-redirects";
import type { Nav, Sidebar, SocialLink } from "@rspress/shared";
import dotenv from "dotenv";
import fileTree from "rspress-plugin-file-tree";
import ga from "rspress-plugin-google-analytics";
import readingTime from "rspress-plugin-reading-time";
import sitemap from "rspress-plugin-sitemap";
import { defineConfig } from "rspress/config";
import { withZephyr } from "zephyr-rspack-plugin";

import { Categories, Errors } from "./lib/error-codes-messages";
import { PAGE_CODE_REGEX, getError as getZeError } from "./lib/error-helpers";
import { capitalizeFirstLetter } from "./lib/utils/casing";

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

const zephyrRsbuildPlugin = () => ({
  name: "zephyr-rsbuild-plugin",
  setup(api: {
    // biome-ignore lint/suspicious/noExplicitAny: `modifyRspackConfig` is a valid method
    modifyRspackConfig: (arg0: (config: any) => Promise<void>) => void;
  }) {
    api.modifyRspackConfig(async (config) => {
      let searchIndexExists = false;
      searchIndexExists = fs.existsSync(TEMP_SEARCH_INDEX_PATH);

      config.name === "web" && (await withZephyr()(config));
    });
  },
});

const newRelicScript = fs.readFileSync("lib/scripts/new-relic.js", "utf-8");

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
    text: "Get Started",
    link: "/general/get-started",
    activeMatch: "/general/get-started/",
  },
  {
    text: "Zephyr Cloud →",
    link: "https://app.zephyr-cloud.io",
  },
];

const sidebar: Sidebar = {
  "/": [
    {
      text: "General",
      items: [
        {
          text: "Why Zephyr Cloud",
          link: "/general/why-zephyr-cloud",
        },
        {
          text: "Get Started",
          link: "/general/get-started",
        },
        {
          text: "Create MF App",
          link: "/general/create-mf-app",
        },
        {
          text: "Architecture",
          link: "/general/architecture",
        },
        {
          text: "Additional Resources",
          link: "/general/resources",
        },
        {
          text: "FAQ",
          link: "/general/question",
        },
      ],
    },
    {
      text: "How to",
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: "Micro-Frontends with Zephyr",
          link: "/how-to/mf-guide",
        },
        {
          text: "Dependency Management",
          link: "/how-to/dependency-management",
        },
        {
          text: "Fork Our Examples",
          link: "/how-to/fork-our-examples",
        },
        {
          text: "Environments",
          link: "/how-to/environments",
        },
        {
          text: "GitHub automations",
          link: "/how-to/github-automations",
        },
        {
          text: "Gitlab automations",
          link: "/how-to/gitlab-automations",
        },
        {
          text: "End-to-end Testing",
          link: "/how-to/end-to-end-testing",
        },
        {
          text: "Chrome Extension",
          link: "/how-to/browser-extension",
        },
        {
          text: "Version rollback and roll-forward",
          link: "/how-to/versioning-tags",
        },
        {
          text: "Generate an API Token",
          link: "/how-to/api-token",
        },
        {
          text: "Version Statuses",
          link: "/how-to/version-statuses",
        },
        {
          text: "Allow IP addresses",
          link: "/how-to/allow-ip-addresses",
        },
      ],
    },
    {
      text: "Cloud Providers",
      link: "/cloud",
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: "Akamai",
          link: "/cloud/akamai",
        },
        {
          text: "Cloudflare",
          link: "/cloud/cloudflare",
        },
        {
          text: "Fastly",
          link: "/cloud/fastly",
        },
        {
          text: "Netlify",
          link: "/cloud/netlify",
        },
        {
          text: "Updating Integrations",
          link: "/cloud/updating-integrations",
        },
      ],
    },
    {
      text: "Recipes",
      link: "/recipes",
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: "Existing App",
          link: "/recipes/existing-app",
        },
        {
          text: "React Native + Re.Pack + MF",
          link: "/recipes/repack-mf",
        },
        {
          text: "React + Vite",
          link: "/recipes/react-vite",
        },
        {
          text: "Vite + Rspack + webpack + MF",
          link: "/recipes/vite-rspack-webpack-mf",
        },
        {
          text: "React + Rspack + Nx",
          link: "/recipes/react-rspack-nx",
        },
        {
          text: "Rspress",
          link: "/recipes/rspress",
        },
        {
          text: "React + Rspack + Turborepo",
          link: "/recipes/turborepo-react",
        },
        {
          text: "React Native",
          link: "/recipes/react-native",
        },
        {
          text: "Migrate from Webpack to Rspack in Nx",
          link: "/recipes/migrate-nx-webpack-to-rspack",
        },
        {
          text: "Nx MF App",
          link: "/recipes/nx-mf-app",
        },
        {
          text: "ModernJS",
          link: "/recipes/modernjs",
        },
        {
          text: "Rolldown React",
          link: "/recipes/rolldown-react",
        },
        {
          text: "Parcel React",
          link: "/recipes/parcel-react",
        },
      ],
    },

    {
      text: "Supported Bundlers & Platforms",
      link: "/supported",
    },
    {
      text: "Troubleshooting",
      link: "/errors",
      collapsed: true,
      collapsible: true,
      items: Object.entries(Categories)
        .filter(([category]) => category !== "unknown")
        .map(([category, value]) => ({
          text: capitalizeFirstLetter(category),
          collapsed: true,
          collapsible: true,
          items: Object.values(Errors)
            .filter((error) => error.kind === category)
            .map((error) => ({
              text: `ZE${value}${error.id}`,
              link: `/errors/ze${value}${error.id}`,
              description: error.message,
              label: error.message,
            })),
        })),
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
    socialLinks,
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
          process.env.PUBLIC_RSPRESS_INTERCOM_APP_ID,
        ),
      },
    },
    plugins: [zephyrRsbuildPlugin()],
    output: {
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
          children: newRelicScript,
        },
        {
          tag: "script",
          attrs: { type: "text/javascript" },
          children: twitterScript,
        },
      ],
    },
  },

  plugins: [
    sitemap({ domain: "https://docs.zephyr-cloud.io" }),
    readingTime(),
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
    fileTree(),
    ga({
      id: "G-B7G266JZDH",
    }),
    pluginClientRedirects({
      redirects: [
        { from: "/how-to/cloud-providers", to: "/cloud" },
        { from: "^/guide/general/get-started", to: "/general/get-started" },
        {
          from: "^/concepts/architecture",
          to: "/general/architecture",
        },
        {
          from: "^/learning/concepts/architecture",
          to: "/general/architecture",
        },
        {
          from: "^/learning/resources",
          to: "/general/resources",
        },
        {
          from: "/guide/integrations/cloudflare",
          to: "/cloud/cloudflare",
        },
        {
          from: "/guide/integrations/netlify",
          to: "/cloud/netlify",
        },
      ],
    }),
  ],
});
