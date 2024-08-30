import Theme from 'rspress/theme';
import { Footer } from '../components/footer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { version } from '../lib/site.config';

export const CurrentVersion = () => {
  return (
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
                Current version: {version}
              </p>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent className="bg-zinc-950">
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
        Docs
      </a>
    </div>
  );
};

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
};

export * from 'rspress/theme';
