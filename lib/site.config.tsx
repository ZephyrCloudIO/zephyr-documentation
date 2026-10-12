import { AkamaiIcon } from '@/components/icons/akamai';
import { AWSIcon } from '@/components/icons/aws';
import { CloudflareIcon } from '@/components/icons/cloudflare';
import { FastlyIcon } from '@/components/icons/fastly';
import { KubernetesIcon } from '@/components/icons/kubernetes';
import type React from 'react';
import ModuleFederationIcon from '../components/icons/module-federation';
// import { QwikIcon } from '../components/icons/qwik';
// import { AngularIcon } from '../components/icons/angular';
// import { LernaIcon } from '../components/icons/lerna';
import { NxIcon } from '../components/icons/nx';
import { ReactIcon } from '../components/icons/react';
import { RepackIcon } from '../components/icons/repack';
import { RspackIcon } from '../components/icons/rspack';
import { RspressIcon } from '../components/icons/rspress';
import { ViteIcon } from '../components/icons/vite';
import { WebpackIcon } from '../components/icons/webpack';

export interface CardItemProps {
  title: string;
  href: string;
  framework?: string;
  developed?: boolean;
  description?: string;
  className?: string;
  icons?: React.ReactElement[];
  variant?: 'small' | 'default' | 'large';
}

export type CardProps = Record<string, CardItemProps[]>;

export const Links = {
  github: 'https://github.com/ZephyrCloudIO/docs',
  extension:
    'https://chromewebstore.google.com/detail/zephyr-mission-control/liflhldchhinbaeplljlplhnbkdidedn',
  discord: 'https://discord.gg/zephyrcloud',
};
export const SiteConfig: CardProps = {
  getStarted: [
    {
      title: '🚀 Rsbuild (Recommended)',
      description:
        'Extremely fast builds with Rspack. Zero-config setup with sensible defaults.',
      href: '/integrations/react-rsbuild',
      variant: 'small',
      icons: [<ReactIcon />, <RspackIcon />],
    },
    {
      title: '⚡ Vite',
      description:
        'Lightning-fast development with instant hot reload and modern ESM.',
      href: '/integrations/react-vite',
      variant: 'small',
      icons: [<ReactIcon />, <ViteIcon />],
    },
    {
      title: '📱 Re.Pack (React Native)',
      description:
        'Advanced React Native bundling with Rspack-based tooling and hot reload.',
      href: '/integrations/react-native-repack',
      variant: 'small',
      icons: [<ReactIcon />],
    },
    {
      title: '🔧 Rspack + Nx',
      description:
        'Powerful monorepo setup with Nx workspace and high-performance Rspack bundler.',
      href: '/integrations/react-rspack-nx',
      variant: 'small',
      icons: [<ReactIcon />, <RspackIcon />, <NxIcon />],
    },
  ],
  recipes: [
    {
      // react-vite-ts
      title: 'React + Vite',
      framework: 'react',
      description: 'Use Zephyr with React and Vite.',
      href: '/integrations/react-vite',
      variant: 'small',
      icons: [<ReactIcon />, <ViteIcon />],
    },
    {
      // react-vite-ts
      title: 'Add Zephyr to existing App',
      framework: 'react',
      description: 'Add Zephyr to an existing application',
      href: '/integrations/existing-app',
      variant: 'small',
      icons: [<ReactIcon />, <ViteIcon />, <WebpackIcon />, <RspackIcon />],
    },
    {
      title: 'Vite + Rspack + Webpack + Module Federation',
      framework: 'vite',
      description:
        'Deploying a Micro-Frontend application using the Official Vite Plugin from Module Federation with Vite, Rspack and Webpack on Zephyr. ',
      href: '/integrations/vite-rspack-webpack-mf',
      variant: 'small',
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
      title: 'React + Rsbuild',
      description: 'Use Zephyr with React and Rsbuild.',
      href: '/integrations/react-rsbuild',
      variant: 'small',
      icons: [<ReactIcon />, <RspackIcon />],
    },
    {
      title: 'React + Rspack + Nx',
      description: 'Use Zephyr with React, Nx and Rspack.',
      href: '/integrations/react-rspack-nx',
      variant: 'small',
      icons: [<ReactIcon />, <RspackIcon />, <NxIcon />],
    },
    {
      title: 'React Native + Re.Pack',
      description:
        'Read more about how Zephyr works with Re.Pack - built for React Native.',
      href: '/integrations/react-native-repack',
      variant: 'small',
      icons: [<ReactIcon />, <RepackIcon />],
    },
    {
      // react-vite-ts
      title: 'Enable SSG on Rspress',
      framework: 'react',
      description: 'Deploy a SSG application with Zephyr + Rspress.',
      href: '/meta-frameworks/rspress',
      variant: 'small',
      icons: [<RspressIcon />],
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
  cloud: [
    {
      title: 'Cloudflare',
      description:
        'Configure Cloudflare integration with Page project, KV namespaces and Workers',
      variant: 'small',
      href: '/cloud/cloudflare',
      icons: [<CloudflareIcon className="w-6 h-6" />],
    },
    {
      title: 'Fastly',
      description:
        'Configure Fastly integration with edge computing capabilities and global CDN',
      variant: 'small',
      href: '/cloud/fastly',
      icons: [<FastlyIcon className="w-6 h-6" />],
    },
    {
      title: 'Akamai',
      description:
        'Set up Akamai integration with EdgeWorkers and EdgeKV for global performance',
      variant: 'small',
      href: '/cloud/akamai',
      icons: [<AkamaiIcon className="w-6 h-6" />],
    },
    {
      title: 'AWS',
      description:
        'Deploy and manage your applications on Amazon Web Services infrastructure',
      variant: 'small',
      href: '/cloud/aws',
      icons: [<AWSIcon className="w-6 h-6" />],
    },
    {
      title: 'Kubernetes',
      description: 'Deploy to your own Kubernetes infrastructure (Enterprise)',
      variant: 'small',
      href: '/cloud/kubernetes',
      icons: [<KubernetesIcon className="w-6 h-6" />],
    },
  ],
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
    supported: 'prod',
  },
  {
    name: 'Svelte',
    icon: '',
    supported: 'prod',
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
];

export const supportedBundler = [
  {
    name: 'Rsbuild',
    icon: '',
    supported: 'prod',
  },
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

export const supportedCloud = [
  {
    name: 'Zephyr Managed Cloud (default)',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'Cloudflare',
    icon: '',
    supported: 'prod',
  },
  {
    name: 'AWS',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'Azure',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'Vercel',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'Supabase',
    icon: '',
    supported: 'backlog',
  },
  {
    name: 'ByteDance Cloud',
    icon: '',
    supported: 'backlog',
  },
];
