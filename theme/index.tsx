import { useEffect, useState } from 'react';
import { useDark, useLang } from '@rspress/core/runtime';
import {
  Layout as DefaultLayout,
  getCustomMDXComponent as basicGetCustomMDXComponent,
} from '@rspress/core/theme';
import { Card } from '@/components/ui/card';
import { CardLayout } from '@/components/ui/card-layout';
import {
  LlmsContainer,
  LlmsCopyButton,
  LlmsViewOptions,
} from '@rspress/plugin-llms/runtime';
import {
  Search as PluginAlgoliaSearch,
  ZH_LOCALES,
} from '@rspress/plugin-algolia/runtime';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/cn';

import { Footer } from '../components/footer';
import { type CardItemProps, version } from '../lib/site.config';

export const CurrentVersion = () => {
  const dark = useDark();
  const [currentVersion, setCurrentVersion] = useState(version);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getLatestVersion() {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://registry.npmjs.org/zephyr-webpack-plugin/latest',
        );
        const data = await response.json();
        setCurrentVersion(data.version);
      } catch (error) {
        console.error('Error fetching package info:', error);
      } finally {
        setIsLoading(false);
      }
    }

    getLatestVersion();
  }, []);

  return isLoading ? null : (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="py-1 px-3 bg-blue-400 border-[0.4px] border-zinc-400/80 rounded-md mb-4">
            <a
              href="https://www.npmjs.com/package/zephyr-webpack-plugin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <span className="text-xs flex font-semibold text-[var(--rp-c-text-1)] font-mono">
                Current version: {currentVersion}
              </span>
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent
          className={cn('z-[100]', dark ? 'bg-zinc-950' : 'bg-zinc-50')}
        >
          <p>Latest version of our Plugins</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const AfterNavTitle = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <a
        href="/"
        className="text-sm font-nebu-semibold text-[var(--rp-c-text-1)] font-bold  transition-all hover:text-[var(--rp-c-text-2)]"
      >
        Zephyr Cloud Docs
      </a>
    </div>
  );
};

const Search = () => {
  const lang = useLang();
  return (
    <PluginAlgoliaSearch
      docSearchProps={{
        appId: '072HAFA8RX', // cspell:disable-line
        apiKey: 'ed3f7caac2f30ca8f3cc9ff8f5fb3bd8', // cspell:disable-line
        indexName: 'zephyr_cloud_io_docs',
        searchParameters: {
          facetFilters: [`lang:${lang}`],
        },
      }}
      locales={ZH_LOCALES}
    />
  );
};

const items = [
  {
    title: 'Get Started Guide',
    href: '/general/get-started',
    description: 'Not sure where to start?',
    variant: 'small',
  },
  {
    title: 'Existing Application',
    href: '/how-to/existing-app',
    description: 'Check how to add Zephyr to your existing application?',
    variant: 'small',
  },
  {
    title: 'Netlify Integration',
    href: '/cloud/netlify',
    description: 'Add Netlify as your Deployment Integration on Zephyr Cloud.',
    variant: 'small',
  },
  {
    title: 'Cloudflare Integration',
    href: '/cloud/cloudflare',
    description:
      'Add Cloudflare as your Deployment Integration on Zephyr Cloud.',
    variant: 'small',
  },
] satisfies CardItemProps[];

const NotFoundLayout = () => (
  <div className="flex flex-col gap-10 items-center justify-center container mx-auto min-w-[96vw] min-h-[80vh]">
    <h1 className="text-6xl font-semibold">404</h1>
    <h2>
      We can't find the page you were looking for...Maybe take a look at these?
    </h2>

    <CardLayout>
      {items.map((item) => (
        <Card item={item} />
      ))}
    </CardLayout>
  </div>
);

const Layout = () => (
  <DefaultLayout
    beforeDocContent={<CurrentVersion />}
    afterNavTitle={<AfterNavTitle />}
    bottom={<Footer />}
  />
);

function getCustomMDXComponent() {
  const { h1: H1, ...components } = basicGetCustomMDXComponent();

  const MyH1 = ({ ...props }) => {
    return (
      <>
        <H1 {...props} />
        <LlmsContainer>
          <LlmsCopyButton />
          <LlmsViewOptions textByLang={{ en: 'Open in...' }} />
        </LlmsContainer>
      </>
    );
  };
  return {
    ...components,
    h1: MyH1,
  };
}

export { Layout, NotFoundLayout, Search, getCustomMDXComponent };

export * from '@rspress/core/theme';
