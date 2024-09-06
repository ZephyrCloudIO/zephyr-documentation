import { cn } from '@/lib/cn';

export const Separator = ({ className }: { className: string }) => {
  return (
    <div className={cn('py-8 -mb-8  lg:my-4 md:my-6 lg:-mb-8', className)}>
      <div className="h-[0.4px] bg-zinc-200/30"></div>
    </div>
  );
};
