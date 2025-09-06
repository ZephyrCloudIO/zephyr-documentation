import { Card } from "@zephyr-docs/shared";
import { SiteConfig } from "../lib/site.config";

export const GetStartedCards = () => {
  return (
    <>
      {SiteConfig.getStarted.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </>
  );
};
