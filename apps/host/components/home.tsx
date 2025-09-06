import { Card } from "@zephyr-docs/shared";
import { SiteConfig } from "../lib/site.config";

export const HomeStart = () => {
  return (
    <>
      {SiteConfig.start.map((item, i) => {
        return <Card key={i} item={item} />;
      })}
    </>
  );
};

export const HomeConfigure = () => {
  return (
    <>
      {SiteConfig.configure.map((item, i) => {
        return <Card key={i} item={item} />;
      })}
    </>
  );
};

export const HomeConcept = () => {
  return (
    <>
      {SiteConfig.concepts.map((item, i) => {
        return <Card key={i} item={item} />;
      })}
    </>
  );
};

export const HomeRecipes = () => {
  return (
    <>
      {SiteConfig.recipes.slice(0, 4).map((item, i) => {
        return <Card key={i} item={item} />;
      })}
    </>
  );
};
