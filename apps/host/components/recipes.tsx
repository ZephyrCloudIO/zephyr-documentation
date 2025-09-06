import { Card } from "@zephyr-docs/shared";
import { SiteConfig } from "../lib/site.config";

export const Recipes = () => {
  return (
    <>
      {SiteConfig.recipes.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </>
  );
};
