import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "../../lib/cn";

const badgeVariants = cva(
	"inline-flex items-center rounded-none border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-cyan-500/70 text-[var(--rp-c-text-2)] hover:bg-primary/80",
				secondary:
					"border-transparent rounded-full bg-white p-[2px] text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-red-400/70 text-destructive-foreground hover:bg-destructive/80",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
