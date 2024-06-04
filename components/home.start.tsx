import { HomeConfig } from "../utils/home.config";
import { HomeCard } from "./home.card";

const items = HomeConfig.start;

export const HomeStart = () => {
  return (
    <>
      {items.map((item, i) => {
        return <HomeCard key={i} item={item} />;
      })}
    </>
  );
};
