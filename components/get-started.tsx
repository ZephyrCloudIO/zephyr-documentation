import { SiteConfig } from "../lib/site.config";
import { Card } from "./ui/card";

export const GetStartedCards = () => {
	return (
		<>
			{SiteConfig.getStarted.map((item, i) => (
				<Card key={i} item={item} />
			))}
		</>
	);
};
