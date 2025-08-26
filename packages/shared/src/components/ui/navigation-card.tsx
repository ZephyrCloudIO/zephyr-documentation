import { cn } from "../../lib/cn";

export const NavigationCard = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  return (
    <div className={cn(
      "rounded-lg border bg-[var(--rp-c-bg-soft)] text-[var(--rp-c-text-1)] shadow-sm",
      className
    )}>
      {children}
    </div>
  );
};

export const NavigationCardHeader = ({ 
  children 
}: { 
  children: React.ReactNode; 
}) => {
  return (
    <div className="flex flex-col space-y-1.5 p-6">
      {children}
    </div>
  );
};

export const NavigationCardTitle = ({ 
  children 
}: { 
  children: React.ReactNode; 
}) => {
  return (
    <h3 className="text-2xl font-semibold leading-none tracking-tight">
      {children}
    </h3>
  );
};

export const NavigationCardDescription = ({ 
  children 
}: { 
  children: React.ReactNode; 
}) => {
  return (
    <p className="text-sm text-[var(--rp-c-text-2)]">
      {children}
    </p>
  );
};

export const NavigationCardContent = ({ 
  children 
}: { 
  children: React.ReactNode; 
}) => {
  return (
    <div className="p-6 pt-0">
      {children}
    </div>
  );
};