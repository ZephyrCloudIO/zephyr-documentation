/* eslint-disable @typescript-eslint/no-var-requires */
//import { withZephyr } from "vite-plugin-zephyr"
import * as fs from "node:fs";
import * as path from "node:path";
import type { RsbuildPlugin } from "@rsbuild/core";
import type { RspressPlugin } from "@rspress/shared";
import fileTree from "rspress-plugin-file-tree";
import ga from "rspress-plugin-google-analytics";
import { defineConfig } from "rspress/config";
import type { UserConfig } from "rspress/config";
import { withZephyr } from "zephyr-rspack-plugin";
import { withZephyr as withZephyrWebpack } from "zephyr-webpack-plugin"
import { Categories, Errors } from "./lib/error-codes-messages";
import { PAGE_CODE_REGEX, getError as getZeError } from "./lib/error-helpers";
import { capitalizeFirstLetter } from "./lib/utils/casing";

const newRelicScript = fs.readFileSync("lib/scripts/new-relic.js", "utf-8");

const zephyrRspressPlugin = (): RspressPlugin => ({
	name: "zephyr-plugin",
	builderConfig: {
		tools: {

			rspack: async (config) => {
				console.log('config.build.config', config)

				config.module.generator && console.log('config.module.generator', Object.entries(config.module.generator))
				config.module.parser && console.log('config.module.parser', Object.entries(config.module.parser))
				config.module.rules && console.log('config.module.rules', Object.entries(config.module.rules))


				if (String(config.target).includes('web')) {
					//@ts-expect-error - type conflict with zephyr and rsbuild
					// biome-ignore lint/style/noParameterAssign: I hate you biome
					config = await withZephyr()(config);
				}
				// biome-ignore lint/style/noParameterAssign: I hate you biome
				// config = await withZephyr()(config);
				// console.log("ZE");
			},
		},
	},
});

const zephyrRsbuildPlugin = (): RsbuildPlugin => ({
	name: "zephyr-rsbuild-plugin",
	setup(api) {
		// console.log("zephyr-rsbuild-plugin");
		// //@ts-expect-error - type conflict with zephyr and rsbuild

		api.modifyRspackConfig(async (config) => {
			console.log("zephyr-rsbuild-plugin modifyRspackConfig");
			// Deploy with zephyr
			// //@ts-expect-error - type conflict with zephyr and rsbuild
			// return await withZephyr()(config);
		});
	},
});

const socialLinks: UserConfig["themeConfig"]["socialLinks"] = [
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

const nav: UserConfig["themeConfig"]["nav"] = [
	{
		text: "Get Started",
		link: "/general/get-started",
		activeMatch: "/general/get-started/",
	},
	{
		text: "Learning",
		link: "/learning",
		activeMatch: "/learning",
	},

	{
		text: "Zephyr Cloud →",
		link: "https://app.zephyr-cloud.io",
	},
];

const sidebar: UserConfig["themeConfig"]["sidebar"] = {
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
					text: "FAQ",
					link: "/general/question",
				},
			],
		},
		{
			text: "How to",
			items: [
				{
					text: "Micro-Frontends with Zephyr",
					link: "/how-to/mf-guide",
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
					text: "Chrome Extension",
					link: "/how-to/browser-extension",
				},
				{
					text: "Version rollback and roll-forward",
					link: "/how-to/versioning-tags",
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
			items: [
				{
					text: "Cloudflare",
					link: "/cloud/cloudflare",
				},
				{
					text: "Netlify",
					link: "/cloud/netlify",
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
			],
		},

		{
			text: "Supported Bundlers & Platforms",
			link: "/supported",
		},
		{
			text: "Trouble Shooting",
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
};

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
	search: {
		searchHooks: path.join(__dirname, "lib/utils/after-search.ts"),
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
		output: {
			copy: {
				patterns: [{ from: "docs/public" }],
			},
		},
		html: {
			tags: [
				{
					tag: "script",
					attrs: { type: "text/javascript" },
					children: newRelicScript,
				},
			],
		},
		// plugins: [zephyrRsbuildPlugin()]
	},

	plugins: [
		fileTree(),
		ga({
			id: "G-B7G266JZDH",
		}),
		{
			name: "zephyr-add-error-codes",
			modifySearchIndexData(rows) {
				for (const row of rows) {
					const match = PAGE_CODE_REGEX.exec(row.routePath);

					if (!match) {
						continue;
					}

					const error = getZeError(match[1]);

					if (!error) {
						throw new Error(`Invalid error page found: ${match[1]}`);
					}

					// Adds to content because the indexer is not configured to
					// lookup the frontmatter data.
					// https://github.com/web-infra-dev/rspress/blob/d16b4b625c586e8d10385c792ade2a5d356834f3/packages/theme-default/src/components/Search/logic/providers/LocalProvider.ts#L78
					row.content = `ZE${Categories[error.kind]}${error.id}\n${error.message
						}\n\n\n${row.content}`; // prepends to have higher priority
				}
			},
		},
		zephyrRspressPlugin(),
	],
});
