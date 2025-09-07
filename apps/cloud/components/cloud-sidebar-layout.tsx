import { ReactNode } from 'react';
import { SidebarLayout as SharedSidebarLayout } from "@zephyr-docs/shared";
import { CloudSidebar } from './cloud-sidebar';

interface CloudSidebarLayoutProps {
  children: ReactNode;
}

export function CloudSidebarLayout({ children }: CloudSidebarLayoutProps) {
  return (
    <SharedSidebarLayout sidebar={<CloudSidebar />} wrapContent={false}>
      <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg dark:prose-invert prose-headings:tracking-tight prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-7 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:font-semibold prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
        {children}
      </div>
    </SharedSidebarLayout>
  );
}