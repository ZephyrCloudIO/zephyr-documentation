import { type ComponentProps, useEffect } from 'react';
import { useLang, usePage } from '@rspress/core/runtime';
import posthog from 'posthog-js';
import {
  Layout as DefaultLayout,
  getCustomMDXComponent as basicGetCustomMDXComponent,
} from '@rspress/core/theme-original';
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

import { DocFooter, Footer } from '../components/footer';
import type { CardItemProps } from '../lib/site.config';

const POSTHOG_KEY = process.env.PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.PUBLIC_POSTHOG_HOST;

const AfterNavTitle = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <a
        href="/"
        className="text-sm text-[var(--rp-c-text-1)] font-bold  transition-all hover:text-[var(--rp-c-text-2)]"
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
        indexName: 'Zephyr Docs',
        searchParameters: {
          facetFilters: [`lang:${lang}`],
        },
      }}
      locales={ZH_LOCALES}
    />
  );
};

const notFoundSuggestions = [
  {
    title: 'Quick Start',
    href: '/getting-started/quick-start',
    description: 'Not sure where to start?',
    variant: 'small',
  },
  {
    title: 'Existing Application',
    href: '/integrations/existing-app',
    description: 'Add Zephyr to the application you already have.',
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
      {notFoundSuggestions.map((item) => (
        <Card key={item.href} item={item} />
      ))}
    </CardLayout>
  </div>
);

/** Doc pages get a compact footer under prev/next; other pages the full one. */
const SiteFooter = () => {
  const { page } = usePage();
  const isDoc = page.pageType === 'doc' || page.pageType === 'doc-wide';
  return isDoc ? null : <Footer />;
};

const Layout = () => {
  useEffect(() => {
    if (!POSTHOG_KEY) {
      return;
    }

    posthog.init(POSTHOG_KEY, {
      ...(POSTHOG_HOST ? { api_host: POSTHOG_HOST } : {}),
      ui_host: 'https://us.posthog.com',
      defaults: '2026-01-30',
      person_profiles: 'identified_only',
    } as const);
  }, []);

  return (
    <DefaultLayout
      afterNavTitle={<AfterNavTitle />}
      afterDocFooter={<DocFooter />}
      bottom={<SiteFooter />}
    />
  );
};

const { h1: BasicH1 } = basicGetCustomMDXComponent();

const H1WithLlmsActions = (props: ComponentProps<'h1'>) => (
  <>
    <BasicH1 {...props} />
    <LlmsContainer>
      <LlmsCopyButton />
      <LlmsViewOptions textByLang={{ en: 'Open in...' }} />
    </LlmsContainer>
  </>
);

function getCustomMDXComponent() {
  return {
    ...basicGetCustomMDXComponent(),
    h1: H1WithLlmsActions,
  };
}

export { Layout, NotFoundLayout, Search, getCustomMDXComponent };

export * from '@rspress/core/theme-original';
