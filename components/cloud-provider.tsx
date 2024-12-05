import { SiteConfig } from "../lib/site.config";
import type { CardItemProps } from "../lib/site.config";
import { CloudflareIcon } from "./icons/cloudflare";
import { NetlifyIcon } from "./icons/netlify";
import { Card } from "./ui/card";
export const CloudProviderCards = () => {
	return (
		<>
			{SiteConfig.cloud.map((item, i) => (
				<Card key={i} item={item} />
			))}
		</>
	);
};

const item = {
	title: "Add Environments",
	href: "/how-to/environments",
	description:
		"Configure custom domain for your application with your deployment integration platform.",
	variant: "default",
	icons: [<CloudflareIcon />, <NetlifyIcon />],
} satisfies CardItemProps;

export const CustomDomain = () => {
	return (
		<div>
			<Card item={item} />
		</div>
	);
};
