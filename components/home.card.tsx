import { cn } from "../utils/cn";
import { CardItemProps } from "../utils/site.config";
export const HomeCard = ({ item }: { item: CardItemProps }) => {
  return (
    <li
      className={cn(
        "mb-2 list-none col-span-2",
        item.className,
        item.variant === "small" && "col-span-1",

        item.variant === "large" && "col-span-2 lg:col-span-2"
      )}
    >
      <div
        className={cn(
          "group relative rounded-md bg-slate-700/20 overflow-hidden px-[0.6px] pb-[1.02px] pt-[1px] lg:hover:!opacity-100 transition-all lg:group-hover/list:opacity-30"
        )}
      >
        <div
          id="glow"
          className="absolute glow rotate-45 inset-0 w-[100px] h-[100px] z-0 hidden transition lg:-inset-x-6 lg:hidden lg:group-hover:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
        />
        <a
          href={item.href}
          className={cn(
            "z-5 lg:px-5 lg:py-4 relative md:min-h-48 min-h-32 xl:min-h-48 max-h-52 lg:hover:ring ring-cyan-950/50 rounded-md  bg-slate-700/20 flex flex-col transition-all p-4   gap-2 lg:gap-5 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-zinc-800 "
          )}
        >
          {item.icons &&
              <div className="flex items-center gap-2">
            {item.icons.map((Icon, index) => (
                  <span>{Icon} </span>
              ))}
            </div>
          }
          <h2>{item.title}</h2>
          <p>{item.description && item.description}</p>
        </a>
      </div>
    </li>
  );
};
