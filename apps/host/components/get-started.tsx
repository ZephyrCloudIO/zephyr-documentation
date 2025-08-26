import { SiteConfig } from "../lib/site.config";
import { Card } from "@zephyr-docs/shared";

export const GetStartedCards = () => {
  return (
    <>
      {SiteConfig.getStarted.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </>
  );
};
