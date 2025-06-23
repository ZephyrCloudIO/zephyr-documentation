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
    text: "Zephyr Cloud →",
    link: "https://app.zephyr-cloud.io",
  },
];

const sidebar: Sidebar = {
  "/": [
    {
      text: "General",
      link: "/",
      items: [
        {
          text: "Why Zephyr Cloud",
          link: "/general/why-zephyr-cloud",
        },
        {
          text: "Architecture",
          link: "/general/architecture",
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
          text: "FAQ",
          link: "/general/question",
        },
      ],
    },
    {
      text: "Features",
      link: "/features/mf-guide",
      items: [
        {
          text: "Micro-Frontends with Zephyr",
          link: "/features/mf-guide",
        },
        {
          text: "Dependency Management",
          link: "/features/dependency-management",
        },
        {
          text: "Fork Our Examples",
          link: "/features/fork-our-examples",
        },
        {
          text: "Environments",
          link: "/features/environments",
        },
        {
          text: "GitHub automations",
          link: "/features/github-automations",
        },
        {
          text: "Gitlab automations",
          link: "/features/gitlab-automations",
        },
        {
          text: "End-to-end Testing",
          link: "/features/end-to-end-testing",
        },
        {
          text: "Chrome Extension",
          link: "/features/browser-extension",
        },
        {
          text: "Version rollback and roll-forward",
          link: "/features/versioning-tags",
        },
        {
          text: "Generate an API Token",
          link: "/features/api-token",
        },
        {
          text: "Version Statuses",
          link: "/features/version-statuses",
        },
        {
          text: "Allow IP addresses",
          link: "/features/allow-ip-addresses",
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
  "/learning": [
    {
      text: "Concepts",
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: "Terminologies",
          link: "/learning/concepts/terminologies",
        },
        {
          text: "Architecture",
          link: "/learning/concepts/architecture",
        },

        {
          text: "Micro-Frontend",
          link: "/learning/concepts/micro-frontend",
        },
        {
          text: "Module Federation",
          link: "/learning/concepts/module-federation",
        },
      ],
    },

    {
      text: "Walk-through",
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: "Learn webpack with React",
          link: "/learning/react-webpack",
        },
      ],
    },
    {
      text: "Additional Resources",
      link: "/learning/resources",
    },
  ],
  "/tutorials": [
    {
      text: "Tutorials",
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: "Existing App",
          link: "/tutorials/existing-app",
        },
        {
          text: "React Native + Re.Pack + MF",
          link: "/tutorials/repack-mf",
        },
        {
          text: "React + Vite",
          link: "/tutorials/react-vite",
        },
        {
          text: "Vite + Rspack + webpack + MF",
          link: "/tutorials/vite-rspack-webpack-mf",
        },
        {
          text: "React + Rspack + Nx",
          link: "/tutorials/react-rspack-nx",
        },
        {
          text: "Rspress",
          link: "/tutorials/rspress",
        },
        {
          text: "React + Rspack + Turborepo",
          link: "/tutorials/turborepo-react",
        },
        {
          text: "React Native",
          link: "/tutorials/react-native",
        },
        {
          text: "Migrate from Webpack to Rspack in Nx",
          link: "/tutorials/migrate-nx-webpack-to-rspack",
        },
        {
          text: "Nx MF App",
          link: "/tutorials/nx-mf-app",
        },
        {
          text: "ModernJS",
          link: "/tutorials/modernjs",
        },
        {
          text: "Rolldown React",
          link: "/tutorials/rolldown-react",
        },
        {
          text: "Parcel React",
          link: "/tutorials/parcel-react",
        },
      ],
    },
    {
      text: "Cloud Providers",
      link: "/cloud",
      items: [
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
      ],
    },

    {
      text: "Additional Resources",
      link: "/tutorials/resources",
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
          to: "/learning/concepts/architecture",
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
