import { AkamaiIcon } from "@/components/icons/akamai";
import { CloudflareIcon } from "@/components/icons/cloudflare";
import { FastlyIcon } from "@/components/icons/fastly";
import type React from "react";
import ModuleFederationIcon from "../components/icons/module-federation";
// import { QwikIcon } from '../components/icons/qwik';
// import { AngularIcon } from '../components/icons/angular';
// import { LernaIcon } from '../components/icons/lerna';
import { NetlifyIcon } from "../components/icons/netlify";
import { NxIcon } from "../components/icons/nx";
import { ReactIcon } from "../components/icons/react";
import { RspackIcon } from "../components/icons/rspack";
import { ViteIcon } from "../components/icons/vite";
import { WebpackIcon } from "../components/icons/webpack";
import { RsbuildIcon } from "../components/icons/rsbuild";
import { RolldownIcon } from "../components/icons/rolldown";
import { RollupIcon } from "../components/icons/rollup";
import { ParcelIcon } from "../components/icons/parcel";
import { RepackIcon } from "../components/icons/repack";
import { EmberIcon } from "../components/icons/ember";
import { ModernjsIcon } from "../components/icons/modernjs";
import { RspressIcon } from "../components/icons/rspress";
import { RslibIcon } from "../components/icons/rslib";

export const version = "0.0.38";

export interface CardItemProps {
  title: string;
  href: string;
  framework?: string;
  developed?: boolean;
  description?: string;
  className?: string;
  icons?: React.ReactElement[];
  variant?: "small" | "default" | "large";
}

export type CardProps = Record<string, CardItemProps[]>;

export const Links = {
  github: "https://github.com/ZephyrCloudIO/docs",
  extension:
    "https://chromewebstore.google.com/detail/zephyr-mission-control/liflhldchhinbaeplljlplhnbkdidedn",
  discord: "https://zephyr-cloud.io/discord",
};
export const SiteConfig: CardProps = {
  start: [
    {
      title: "Why Zephyr", // TODO: shouldn't introduction and "Why" be on the same page?
      description:
        "Have an overview of modern application's development complexity and how Zephyr can speed up the process.",
      href: "/general/why-zephyr-cloud",
    },
    {
      title: "Get Started",
      description:
        "The quickest way to get you started with our chrome extension, dashboard and npm package. Use Webpack as an example. ",
      href: "/general/get-started",
      variant: "small",
    },
    {
      title: "Adding Zephyr to existing application",
      description:
        "One line of code to add Zephyr to your existing application. Use Nx + React + Webpack as an example.",
      href: "/recipes/existing-app",
      variant: "small",
    },
    // {
    //     "title": "Module Federation Application",
    //     "description": "Add Zephyr to applications built on module federation.",
    //     "href": "/getting-started/create-mf-app",
    //     "variant": "small"
    // },
  ] as CardItemProps[],
  getStarted: [
    {
      title: "🚀 Rsbuild (Recommended)",
      description: "Extremely fast builds with Rspack. Zero-config setup with sensible defaults.",
      href: "/integrations/react-rsbuild",
      variant: "small",
      icons: [<ReactIcon />, <RspackIcon />],
    },
    {
      title: "⚡ Vite",
      description: "Lightning-fast development with instant hot reload and modern ESM.",
      href: "/integrations/react-vite",
      variant: "small",
      icons: [<ReactIcon />, <ViteIcon />],
    },
    {
      title: "📱 Metro (React Native)",
      description: "Fast, scalable bundler for React Native applications with native performance.",
      href: "/bundlers/metro",
      variant: "small",
      icons: [<ReactIcon />],
    },
    {
      title: "🔧 Re.Pack (React Native)",
      description: "Advanced React Native bundling with Rspack-based tooling and hot reload.",
      href: "/integrations/react-native-repack",
      variant: "small",
      icons: [<ReactIcon />],
    },
  ],
  features: [
    {
      title: "Version control",
      description:
        "Enable you to deploy unlimited versions (depends on your cloud usage) of your application ever deployed on chrome extension and dashboard.",
      href: "/usage/versioning",
      developed: true,
    },
    {
      title: "Rollback and forward",
      description: "Rollback and forward your application.",
      href: "/usage/rollback-forward",
      developed: false,
    },
    {
      title: "Sub-second deploy",
      description:
        "Deploy production and preview version of your application in sub-seconds.",
      href: "/usage/sub-second-deploy",
      developed: true,
    },
    {
      title: "Long-lived preview links",
      description:
        "Every versions that ever deployed will be live forever unless you delete the deployment.",
      href: "/usage/long-live-preview",
      developed: true,
    },
    {
      title: "Dependency management",
      description:
        "Monitor and visualize your dependency of your application - be it remote modules within a app utilizing module federation, or npm packages.",
      href: "/usage/dependency-management",
      developed: true,
    },
  ] as CardItemProps[],

  recipes: [
    {
      // react-vite-ts
      title: "React + Vite",
      framework: "react",
      description: "Use Zephyr with React and Vite.",
      href: "/recipes/react-vite",
      variant: "small",
      icons: [<ReactIcon />, <ViteIcon />],
    },
    {
      // react-vite-ts
      title: "Add Zephyr to existing App",
      framework: "react",
      description: "Add Zephyr to an existing application",
      href: "/recipes/existing-app",
      variant: "small",
      icons: [<ReactIcon />, <ViteIcon />, <WebpackIcon />, <RspackIcon />],
    },
    {
      title: "Vite + Rspack + Webpack + Module Federation",
      framework: "vite",
      description:
        "Deploying a Micro-Frontend application using the Official Vite Plugin from Module Federation with Vite, Rspack and Webpack on Zephyr. ",
      href: "/recipes/vite-rspack-webpack-mf",
      variant: "small",
      icons: [
        <ViteIcon />,
        <ReactIcon />,
        <WebpackIcon />,
        <RspackIcon />,
        <ModuleFederationIcon />,
      ],
    },

    // {
    //     title: "React + Rspack",
    //     description: "Use Zephyr with React and Rspack.",
    //     href: "/recipes/react-rspack",
    //     variant: "small"
    // },
    // {
    //   // react-vite-nx
    //   title: "React + Vite + Nx",
    //   framework: "react",
    //   description: "Use Zephyr with React, Vite and Nx.",
    //   href: "/recipes/react-vite-nx",
    //   variant: "small",
    //   icons: [<ReactIcon />, <NxIcon />, <ViteIcon />],
    // },
    {
      title: "React + Rsbuild",
      description: "Use Zephyr with React and Rsbuild.",
      href: "/recipes/react-rsbuild",
      variant: "small",
      icons: [<ReactIcon />, <RspackIcon />],
    },
    {
      title: "React + Rspack + Nx",
      description: "Use Zephyr with React, Nx and Rspack.",
      href: "/recipes/react-rspack-nx",
      variant: "small",
      icons: [<ReactIcon />, <RspackIcon />, <NxIcon />],
    },
    {
      title: "React Native",
      description:
        "Read more about how Zephyr works with Re.Pack - built for React Native.",
    },
    {
      title: "Migrate from Webpack in Nx to Rspack",
      description: "Migrate from Webpack in Nx to Rspack and use Zephyr.",
      href: "/recipes/migrate-nx-webpack-to-rspack",
      variant: "small",
      icons: [<ModuleFederationIcon />],
    },
    {
      // create-mf-app-rspack
      title: "React + Rspack",
      description: "Use Zephyr with React and Rspack",
      href: "/general/get-started#start-from-scratch",
      variant: "small",
      icons: [<ReactIcon />, <RspackIcon />, <ModuleFederationIcon />],
    },
    // {
    //   // create-nx-rspack-workpace-mf
    //   title: "React + Nx + Rspack + Module Federation",
    //   description: "Use Zephyr with React, Nx, Rspack and Module Federation.",
    //   href: "/recipes/react-nx-mf-rspack",
    //   variant: "small",
    //   icons: [
    //     <ReactIcon />,
    //     <NxIcon />,
    //     <RspackIcon />,
    //     <ModuleFederationIcon />,
    //   ],
    // },
    {
      // create-nx-workspace-mf + react-tractor-sample
      title: "React + Webpack + Nx + Module Federation",
      description: "Use Zephyr with React, Nx and Module Federation.",
      href: "/recipes/nx-mf-app",
      variant: "small",
      icons: [
        <ReactIcon />,
        <WebpackIcon />,
        <NxIcon />,
        <ModuleFederationIcon />,
      ],
    },
    {
      // react-vite-ts
      title: "Enable SSG on Rspress",
      framework: "react",
      description: "Deploy a SSG application with Zephyr + Rspress.",
      href: "/recipes/rspress",
      variant: "small",
      icons: [<RspackIcon />],
    },
    // {
    //   // create-default-webpack-mf
    //   title: "React + Webpack + Lerna + Module Federation",
    //   description: "Use Zephyr with React and Module Federation.",
    //   href: "/recipes/react-mf",
    //   variant: "small",
    //   icons: [
    //     <ReactIcon />,
    //     <WebpackIcon />,
    //     <LernaIcon />,
    //     <ModuleFederationIcon />,
    //   ],
    // },

    // {
    //   // qwik-1.5
    //   title: "Qwik + Netlify",
    //   description:
    //     "Adding Zephyr to Vite config in a Qwik app scaffolded by Qwik city - deploy to Netlify.",
    //   href: "/recipes/qwik/deploy",
    //   variant: "small",
    //   icons: [<QwikIcon />, <NetlifyIcon />],
    // },
    // {
    //   // ng-nx-webpack
    //   title: "Angular + Nx + Webpack",
    //   description: "Use Zephyr with Angular 15 in an Nx workspace.",
    //   href: "/recipes/angular-nx",
    //   variant: "small",
    //   icons: [<AngularIcon />, <NxIcon />, <WebpackIcon />],
    // },

    // {
    //     title: "Cloudflare",
    //     description: "Learn how to use Zephyr to deploy your application on Cloudflare.",
    //     href: "/recipes/cloudflare/deploy",
    //     variant: "small"
    // },
  ] as CardItemProps[],
  concepts: [
    {
      title: "Module Federation",
      description: "Learn about module federation and how Zephyr enhances it.",
      href: "/concepts/module-federation",
      variant: "small",
    },
    {
      title: "Edge",
      description: "What does edge mean? How does it benefit us?",
      href: "/concepts/edge",
      variant: "small",
    },
    {
      title: "Micro Frontend",
      description:
        "What's Micro Frontend? What are the use cases? When is a good time to implement it?",
      href: "/concepts/micro-frontend",
    },
  ] as CardItemProps[],
  bundlers: [
    {
      title: "Webpack",
      description: "Traditional setup with full ecosystem",
      variant: "small",
      href: "/bundlers/webpack",
      icons: [<WebpackIcon className="w-6 h-6" />],
    },
    {
      title: "Rspack",
      description: "Next-generation bundling performance",
      variant: "small",
      href: "/bundlers/rspack",
      icons: [<RspackIcon className="w-6 h-6" />],
    },
    {
      title: "Rsbuild",
      description: "Zero-config setup with Rspack",
      variant: "small",
      href: "/bundlers/rsbuild",
      icons: [<RsbuildIcon className="w-6 h-6" />],
    },
    {
      title: "Vite",
      description: "Fast development with instant HMR",
      variant: "small",
      href: "/bundlers/vite",
      icons: [<ViteIcon className="w-6 h-6" />],
    },
    {
      title: "Rolldown",
      description: "Vite-compatible bundler built in Rust",
      variant: "small",
      href: "/bundlers/rolldown",
      icons: [<RolldownIcon className="w-6 h-6" />],
    },
    {
      title: "Rollup",
      description: "ES module bundler for libraries",
      variant: "small",
      href: "/bundlers/rollup",
      icons: [<RollupIcon className="w-6 h-6" />],
    },
    {
      title: "Parcel",
      description: "Zero configuration build tool",
      variant: "small",
      href: "/bundlers/parcel",
      icons: [<ParcelIcon className="w-6 h-6" />],
    },
    {
      title: "Re.Pack",
      description: "React Native bundling with Rspack",
      variant: "small",
      href: "/bundlers/repack",
      icons: [<RepackIcon className="w-8 h-8" />],
    },
  ],
  cloud: [
    {
      title: "Cloudflare",
      description:
        "Configure Cloudflare integration with Page project, KV namespaces and Workers",
      variant: "small",
      href: "/cloud/cloudflare",
      icons: [<CloudflareIcon className="w-6 h-6" />],
    },
    {
      title: "Netlify",
      description:
        "Manage your Netlify integration with Netlify function, site, and Blob storage",
      variant: "small",
      href: "/cloud/netlify",
      icons: [<NetlifyIcon className="w-6 h-6" />],
    },
    {
      title: "Fastly",
      description:
        "Configure Fastly integration with edge computing capabilities and global CDN",
      variant: "small",
      href: "/cloud/fastly",
      icons: [<FastlyIcon className="w-6 h-6" />],
    },
    {
      title: "Akamai",
      description:
        "Set up Akamai integration with EdgeWorkers and EdgeKV for global performance",
      variant: "small",
      href: "/cloud/akamai",
      icons: [<AkamaiIcon className="w-6 h-6" />],
    },
  ],
  metaFrameworks: [
    {
      title: "Ember.js",
      description: "Productive framework for ambitious web apps",
      variant: "small",
      href: "/meta-frameworks/emberjs",
      icons: [<EmberIcon className="w-8 h-8" />],
    },
    {
      title: "ModernJS",
      description: "Modern web engineering solution",
      variant: "small",
      href: "/meta-frameworks/modernjs",
      icons: [<ModernjsIcon className="w-8 h-8" />],
    },
    {
      title: "Rspress",
      description: "Fast static site generator powered by Rspack",
      variant: "small",
      href: "/meta-frameworks/rspress",
      icons: [<RspressIcon className="w-6 h-6" />],
    },
    {
      title: "Rslib",
      description: "Library build tool based on Rsbuild",
      variant: "small",
      href: "/meta-frameworks/rslib",
      icons: [<RslibIcon className="w-6 h-6" />],
    },
  ],
};

export const supportedBrowser = [
  {
    name: "Google Chrome",
    icon: "",
    supported: true,
  },
  {
    name: "Arc",
    supported: false,
  },
  {
    name: "Opera",
    icon: "",
    supported: true,
  },
  {
    name: "Microsoft Edge",
    icon: "",
    supported: true,
  },
  {
    name: "Firefox",
    icon: "",
    supported: false,
  },
  {
    name: "Safari",
    icon: "",
    supported: false,
  },
  {
    name: "Brave",
    icon: "",
    supported: false,
  },
];

export const supportedFramework = [
  {
    name: "React",
    icon: "",
    supported: "prod",
  },
  {
    name: "Angular v15",
    icon: "",
    supported: "prod",
  },
  {
    name: "Qwik",
    icon: "",
    supported: "prod",
  },
  {
    name: "Solid.js",
    icon: "",
    supported: "prod",
  },
  {
    name: "Svelte",
    icon: "",
    supported: "prod",
  },
  {
    name: "Astro",
    icon: "",
    supported: "backlog",
  },
  {
    name: "Remix",
    icon: "",
    supported: "backlog",
  },
];

export const supportedBundler = [
  {
    name: "Rsbuild",
    icon: "",
    supported: "prod",
  },
  {
    name: "Rspack",
    icon: "",
    supported: "prod",
  },
  {
    name: "Webpack",
    icon: "",
    supported: "prod",
  },
  {
    name: "Vite",
    icon: "",
    supported: "prod",
  },
  {
    name: "Rollup",
    icon: "",
    supported: "prod",
  },
  {
    name: "Esbuild",
    icon: "",
    supported: "backlog",
  },
];

export const supportedCloud = [
  {
    name: "Zephyr Managed Cloud (default)",
    icon: "",
    supported: "prod",
  },
  {
    name: "Cloudflare",
    icon: "",
    supported: "prod",
  },
  {
    name: "Netlify",
    icon: "",
    supported: "prod",
  },
  {
    name: "AWS",
    icon: "",
    supported: "backlog",
  },
  {
    name: "Azure",
    icon: "",
    supported: "backlog",
  },
  {
    name: "Vercel",
    icon: "",
    supported: "backlog",
  },
  {
    name: "Supabase",
    icon: "",
    supported: "backlog",
  },
  {
    name: "ByteDance Cloud",
    icon: "",
    supported: "backlog",
  },
];
