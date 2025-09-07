import { Layout as BasicLayout } from '@rspress/core/theme';
import { CloudSidebar } from '../components/cloud-sidebar';

const Layout = () => {
  const pageData = usePageData();
  const { pageType } = pageData;

  // For doc pages, use our custom layout with CloudSidebar
  if (pageType === 'doc') {
    return (
      <div className="flex min-h-screen bg-gray-900">
        <CloudSidebar />
        <main className="flex-1 overflow-auto bg-gray-900">
          <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg dark:prose-invert prose-headings:tracking-tight prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-7 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:font-semibold prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
            <Content />
          </div>
        </main>
      </div>
    );
  }

  // For all other page types, use the default layout
  return <BasicLayout />;
};

const setup = () => {};

export { Layout, setup };

// Re-export all content from the default theme
export * from '@rspress/core/theme';
