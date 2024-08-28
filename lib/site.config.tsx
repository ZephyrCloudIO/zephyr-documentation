import ModuleFederationIcon from '../components/icons/module-federation';
import { NxIcon } from '../components/icons/nx';
import { ReactIcon } from '../components/icons/react';
import { RspackIcon } from '../components/icons/rspack';
import { ViteIcon } from '../components/icons/vite';
import { WebpackIcon } from '../components/icons/webpack';
// import { QwikIcon } from '../components/icons/qwik';
// import { AngularIcon } from '../components/icons/angular';
// import { LernaIcon } from '../components/icons/lerna';
// import { NetlifyIcon } from '../components/icons/netlify';
export interface CardItemProps {
  title: string;
  href: string;
  framework?: string;
  developed?: boolean;
  description?: string;
  className?: string;
  icons?: JSX.Element[];
  variant?: 'small' | 'default' | 'large';
}

export type CardProps = Record<string, CardItemProps[]>;

export const Links = {
  github: 'https://github.com/ZephyrCloudIO/docs',
  extension:
    'https://chromewebstore.google.com/detail/zephyr-mission-control/liflhldchhinbaeplljlplhnbkdidedn',
  discord: 'https://zephyr-cloud.io/discord',
};
export const SiteConfig: CardProps = {
  start: [
    {
      title: 'Why Zephyr', // TODO: shouldn't introduction and "Why" be on the same page?
      description:
        "Have an overview of modern application's development complexity and how Zephyr can speed up the process.",
      href: '/general/why-zephyr-cloud',
    },
    {
      title: 'Get Started',
      description:
        'The quickest way to get you started with our chrome extension, dashboard and npm package. Use Webpack as an example. ',
      href: '/general/get-started',
      variant: 'small',
    },
    {
      title: 'Adding Zephyr to existing application',
      description:
        'One line of code to add Zephyr to your existing application. Use Nx + React + Webpack as an example.',
      href: '/how-to/existing-app',
      variant: 'small',
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
      title: 'Add Zephyr to your existing project',
      description: 'Available for Webpack, Rspack and Vite',
      href: '/how-to/existing-app',
      variant: 'small',
    },
    {
      title: 'Fork our examples',
      description:
        'With pre-configured application, available in both standalone applications and micro-frontends.',
      href: 'https://github.com/ZephyrCloudIO/zephyr-examples/fork',
      variant: 'small',
    },
    {
      title: 'Start from scratch',
      description: 'Using React and Rspack',
      href: '/general/get-started#start-from-scratch',
      variant: 'small',
    },
  ],
  features: [
    {
      title: 'Version control',
      description:
        'Enable you to deploy unlimited versions (depends on your cloud usage) of your application ever deployed on chrome extension and dashboard.',
      href: '/usage/versioning',
      developed: true,
    },
    {
      title: 'Rollback and forward',
      description: 'Rollback and forward your application.',
      href: '/usage/rollback-forward',
      developed: false,
    },
    {
      title: 'Sub-second deploy',
      description:
        'Deploy production and preview version of your application in sub-seconds.',
      href: '/usage/sub-second-deploy',
      developed: true,
    },
    {
      title: 'Long-lived preview links',
      description:
        'Every versions that ever deployed will be live forever unless you delete the deployment.',
      href: '/usage/long-live-preview',
      developed: true,
    },
    {
      title: 'Dependency management',
      description:
        'Monitor and visualize your dependency of your application - be it remote modules within a app utilizing module federation, or npm packages.',
      href: '/usage/dependency-management',
      developed: true,
    },
  ] as CardItemProps[],

  recipes: [
    {
      // react-vite-ts
      title: 'React + Vite',
      framework: 'react',
      description: 'Use Zephyr with React and Vite.',
      href: '/how-to/react-vite',
      variant: 'small',
      icons: [<ReactIcon />, <ViteIcon />],
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
      title: 'React + Rspack + Nx',
      description: 'Use Zephyr with React, Nx and Rspack.',
      href: '/how-to/react-rspack-nx',
      variant: 'small',
      icons: [<ReactIcon />, <RspackIcon />, <NxIcon />],
    },
    {
      title: 'Migrate from vanilla module federation',
      description: 'Migrate from vanilla module federation to Zephyr.',
      href: '/how-to/existing-app',
      variant: 'small',
      icons: [<ModuleFederationIcon />],
    },
    {
      // create-mf-app-rspack
      title: 'React + Rspack',
      description: 'Use Zephyr with React and Rspack',
      href: '/general/get-started#start-from-scratch',
      variant: 'small',
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
      title: 'React + Webpack + Nx + Module Federation',
      description: 'Use Zephyr with React, Nx and Module Federation.',
      href: '/how-to/nx-mf-app',
      variant: 'small',
      icons: [
        <ReactIcon />,
        <WebpackIcon />,
        <NxIcon />,
        <ModuleFederationIcon />,
      ],
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
      title: 'Module Federation',
      description: 'Learn about module federation and how Zephyr enhances it.',
      href: '/concepts/module-federation',
      variant: 'small',
    },
    {
      title: 'Edge',
      description: 'What does edge mean? How does it benefit us?',
      href: '/concepts/edge',
      variant: 'small',
    },
    {
      title: 'Micro Frontend',
      description:
        "What's Micro Frontend? What are the use cases? When is a good time to implement it?",
      href: '/concepts/micro-frontend',
    },
  ] as CardItemProps[],
};

export const supportedBrowser = [
  {
    name: 'Google Chrome',
    icon: '',
    supported: true,
  },
  {
    name: 'Arc',
    supported: false,
  },
  {
    name: 'Opera',
    icon: '',
    supported: true,
  },
  {
    name: 'Microsoft Edge',
    icon: '',
    supported: true,
  },
  {
    name: 'Firefox',
    icon: '',
    supported: false,
  },
  {
    name: 'Safari',
    icon: '',
    supported: false,
  },
  {
    name: 'Brave',
    icon: '',
    supported: false,
  },
];

export const supportedFramework = [
  {
    name: 'React',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Angular v15',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Qwik',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Solid.js',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'Astro',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'Remix',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'Svelte',
    icon: '',
    supported: 'backlog',
  },
];

export const supportedBundler = [
  {
    name: 'Rspack',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Webpack',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Vite',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Rollup',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Esbuild',
    icon: '',
    supported: 'backlog',
  },
];
