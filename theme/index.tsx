import { Card } from "@/components/ui/card";
import { CardLayout } from "@/components/ui/card-layout";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import { useDark } from "rspress/runtime";
import Theme from "rspress/theme";
import { Footer } from "../components/footer";
import { type CardItemProps, version } from "../lib/site.config";

export const CurrentVersion = () => {
  const dark = useDark();
  const [currentVersion, setCurrentVersion] = useState(version);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getLatestVersion() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://registry.npmjs.org/zephyr-webpack-plugin/latest",
        );
        const data = await response.json();
        setCurrentVersion(data.version);
      } catch (error) {
        console.error("Error fetching package info:", error);
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
          <a
            href="https://www.npmjs.com/package/zephyr-webpack-plugin"
            target="_blank"
            rel="noreferrer"
          >
            <div className="py-1 mb-4 px-3 bg-blue-400 border-[0.4px] border-zinc-400/80 rounded-md">
              <p className="text-xs flex font-semibold text-[var(--rp-c-text-1)] font-mono">
                Current version: {currentVersion}
              </p>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent
          className={cn(
            " max-w-64 z-[100]",
            dark ? "bg-zinc-950" : "bg-zinc-50",
          )}
        >
          <p>Applicable to all npm packages.</p>
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

const items = [
  {
    title: "Get Started Guide",
    href: "/general/get-started",
    description: "Not sure where to start?",
    variant: "small",
  },
  {
    title: "Existing Application",
    href: "/how-to/existing-app",
    description: "Check how to add Zephyr to your existing application?",
    variant: "small",
  },
  {
    title: "Netlify Integration",
    href: "/cloud/netlify",
    description: "Add Netlify as your Deployment Integration on Zephyr Cloud.",
    variant: "small",
  },
  {
    title: "Cloudflare Integration",
    href: "/cloud/cloudflare",
    description:
      "Add Cloudflare as your Deployment Integration on Zephyr Cloud.",
    variant: "small",
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
  <Theme.Layout
    beforeDocContent={<CurrentVersion />}
    afterNavTitle={<AfterNavTitle />}
    bottom={<Footer />}
  />
);

export default {
  ...Theme,
  Layout,
  NotFoundLayout,
};

export * from "rspress/theme";
