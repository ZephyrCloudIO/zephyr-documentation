import ModuleFederationIcon from "../components/icons/module-federation";
import { NxIcon } from "../components/icons/nx";
import { ReactIcon } from "../components/icons/react";
import { RspackIcon } from "../components/icons/rspack";
import { ViteIcon } from "../components/icons/vite";
import { WebpackIcon } from "../components/icons/webpack";
import { QwikIcon } from "../components/icons/qwik";
import { AngularIcon } from "../components/icons/angular";
import { LernaIcon } from "../components/icons/lerna";
import { NetlifyIcon } from "../components/icons/netlify";
export interface CardItemProps {
  title: string;
  href: string;
  framework?: string;
  description?: string;
  className?: string;
  icons?: JSX.Element[];
  variant?: "small" | "default" | "large";
}

export type CardProps = Record<string, CardItemProps[]>;
export const SiteConfig: CardProps = {
  start: [
    {
      title: "Why Zephyr", // TODO: shouldn't introduction and "Why" be on the same page?
      description:
        "Have an overview of modern application's development complexity and how Zephyr can speed up the process.",
      href: "/guide/getting-started/why-zephyr-cloud",
    },
    {
      title: "Installation",
      description:
        "The quickest way to get you started with our chrome extension, dashboard and npm package. Use Webpack as an example. ",
      href: "/guide/getting-started/installation",
      variant: "small",
    },
    {
      title: "Adding Zephyr to existing application",
      description:
        "One line of code to add Zephyr to your existing application. Use Nx + React + Webpack as an example.",
      href: "/guide/getting-started/existing-app",
      variant: "small",
    },
    // {
    //     "title": "Module Federation Application",
    //     "description": "Add Zephyr to applications built on module federation.",
    //     "href": "/guide/getting-started/create-mf-app",
    //     "variant": "small"
    // },
  ],
  features: [
    {
      title: "Version control",
      description:
        "Zephyr provides version control for your application and enabling your application to rollback and forward on chrome extension.",
      href: "/features/version-control",
    },
    {
      title: "Rollback and forward",
      description:
        "Zephyr provides rollback and forward features for your application.",
      href: "/features/rollback-forward",
    },
    {
      title: "Sub-second deploy",
      description: "Zephyr provides sub-second deploy for your application.",
      href: "/features/sub-second-deploy",
    },
    {
      title: "Long-lived preview links",
      description:
        "Zephyr provides long-lived preview links for your application.",
      href: "/features/long-lived-preview-links",
    },
    {
      title: "Dependency management",
      description:
        "Zephyr provides dependency management for your application.",
      href: "/features/dependency-management",
    },
  ],

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

    // {
    //     title: "React + Rspack",
    //     description: "Use Zephyr with React and Rspack.",
    //     href: "/recipes/react-rspack",
    //     variant: "small"
    // },
    {
      // react-vite-nx
      title: "React + Vite + Nx",
      framework: "react",
      description: "Use Zephyr with React, Vite and Nx.",
      href: "/recipes/react-nx",
      variant: "small",
      icons: [<ReactIcon />, <NxIcon />, <ViteIcon />],
    },
    // {
    //     title: "React + Rspack + Nx",
    //     description: "Use Zephyr with React, Nx and Rspack.",
    //     href: "/recipes/react-nx-rspack",
    //     variant: "small"
    // },
    {
      title: "Migrate from vanilla module federation",
      description: "Migrate from vanilla module federation to Zephyr.",
      href: "/guide/getting-started/vanilla-mf",
      variant: "small",
      icons: [<ModuleFederationIcon />],
    },
    {
      // create-mf-app-rspack
      title: "React + Rspack + Module Federation",
      description: "Use Zephyr with React, Rspack and Module Federation.",
      href: "/recipes/react-mf-rspack",
      variant: "small",
      icons: [<ReactIcon />, <RspackIcon />, <ModuleFederationIcon />],
    },
    {
      // create-nx-rspack-workpace-mf
      title: "React + Nx + Rspack + Module Federation",
      description: "Use Zephyr with React, Nx, Rspack and Module Federation.",
      href: "/recipes/react-nx-mf-rspack",
      variant: "small",
      icons: [
        <ReactIcon />,
        <NxIcon />,
        <RspackIcon />,
        <ModuleFederationIcon />,
      ],
    },
    {
      // create-nx-workspace-mf + react-tractor-sample
      title: "React + Webpack + Nx + Module Federation",
      description: "Use Zephyr with React, Nx and Module Federation.",
      href: "/recipes/react-nx-mf",
      variant: "small",
      icons: [
        <ReactIcon />,
        <WebpackIcon />,
        <NxIcon />,
        <ModuleFederationIcon />,
      ],
    },
    {
      // create-default-webpack-mf
      title: "React + Webpack + Lerna + Module Federation",
      description: "Use Zephyr with React and Module Federation.",
      href: "/recipes/react-mf",
      variant: "small",
      icons: [
        <ReactIcon />,
        <WebpackIcon />,
        <LernaIcon />,
        <ModuleFederationIcon />,
      ],
    },

    {
      // qwik-1.5
      title: "Qwik + Netlify",
      description:
        "Adding Zephyr to Vite config in a Qwik app scaffolded by Qwik city - deploy to Netlify.",
      href: "/recipes/qwik/deploy",
      variant: "small",
      icons: [<QwikIcon />, <NetlifyIcon />],
    },
    {
      // ng-nx-webpack
      title: "Angular + Nx + Webpack",
      description: "Use Zephyr with Angular 15 in an Nx workspace.",
      href: "/recipes/angular-nx",
      variant: "small",
      icons: [<AngularIcon />, <NxIcon />, <WebpackIcon />],
    },

    // {
    //     title: "Cloudflare",
    //     description: "Learn how to use Zephyr to deploy your application on Cloudflare.",
    //     href: "/recipes/cloudflare/deploy",
    //     variant: "small"
    // },
  ],
  concepts: [
    {
      title: "Module Federation",
      description: "Learn about module federation and how Zephyr enhances it.",
      href: "/guide/concepts/module-federation",
      variant: "small",
    },
    {
      title: "Edge",
      description: "What does edge mean? How does it benefit us?",
      href: "/guide/concepts/edge",
      variant: "small",
    },
    {
      title: "Micro Frontend",
      description:
        "What's Micro Frontend? What are the use cases? When is a good time to implement it?",
      href: "/guide/concepts/micro-frontend",
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
];
