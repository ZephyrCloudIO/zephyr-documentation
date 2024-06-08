import {  SiteConfig } from "../utils/site.config";
import { HomeCard } from "./home.card";

export const HomeStart = () => {
  return (
    <>
      {SiteConfig.start.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};

export const HomeConfigure = () => {
  return (
    <>
      {SiteConfig.configure.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};

export const HomeConcept = () => {
  return (
    <>
      {SiteConfig.concepts.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};

export const HomeRecipes = () => {
    return (
        <>
        {SiteConfig.recipes.map((item, i) => {
            return <HomeCard key={i} item={item} />;
        })}
        </>
    );
}


