import { cn } from '../../lib/cn';
import type { CardItemProps } from '../../lib/site.config';

export const Card = ({ item }: { item: CardItemProps }) => {
  return (
    <li
      className={cn(
        'list-none col-span-2',
        item.className,
        item.variant === 'small' && 'col-span-1',
        item.variant === 'large' && 'col-span-2 lg:col-span-2',
      )}
    >
      <a
        href={item.href}
        className="group block h-full no-underline hover:no-underline"
        style={{ textDecoration: 'none' }}
      >
        <div className="relative h-full min-h-[10rem] p-4 rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-950/20 hover:-translate-y-1">
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icons */}
            {item.icons && (
              <div className="flex items-center gap-2 mb-1">
                {item.icons.map((Icon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-6 h-6"
                  >
                    {Icon}
                  </div>
                ))}
              </div>
            )}

            {/* Title and Description */}
            <div className="flex-1 flex flex-col justify-center gap-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-50 transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-snug line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
