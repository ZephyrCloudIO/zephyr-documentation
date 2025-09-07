import { ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  className?: string;
  contentClassName?: string;
  wrapContent?: boolean;
}

export function SidebarLayout({ 
  children, 
  sidebar, 
  className = "flex min-h-screen bg-gray-900",
  contentClassName = "flex-1 overflow-auto bg-gray-900",
  wrapContent = true
}: SidebarLayoutProps) {
  return (
    <div className={className}>
      {sidebar}
      <main className={contentClassName}>
        {wrapContent ? (
          <div className="max-w-7xl mx-auto px-8 py-12">{children}</div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}