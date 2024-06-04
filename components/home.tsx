import { CardItemProps, HomeConfig } from "../utils/home.config";
import { HomeCard } from "./home.card";

export const HomeStart = () => {
  return (
    <>
      {HomeConfig.start.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};

export const HomeConfigure = () => {
  return (
    <>
      {HomeConfig.configure.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};

export const HomeConcept = () => {
  return (
    <>
      {HomeConfig.receipes.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};
