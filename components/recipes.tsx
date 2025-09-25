import { SiteConfig } from '../lib/site.config';
import { Card } from './ui/card';

export const Recipes = () => {
  return (
    <>
      {SiteConfig.recipes.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </>
  );
};
