import { MainSidebar } from "./main-sidebar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <MainSidebar />
      <main className="flex-1 overflow-auto bg-gray-900">
        <div className="max-w-7xl mx-auto px-8 py-12">{children}</div>
      </main>
    </div>
  );
}
