import { SidebarLayout as SharedSidebarLayout } from "@zephyr-docs/shared";
import { MainSidebar } from "./main-sidebar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SharedSidebarLayout sidebar={<MainSidebar />}>
      {children}
    </SharedSidebarLayout>
  );
}
