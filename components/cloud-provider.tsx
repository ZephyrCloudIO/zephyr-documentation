import { SiteConfig } from '../lib/site.config';
import { Card } from './ui/card';

export const CloudProviderCards = () => {
  return (
    <>
      {SiteConfig.cloud.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </>
  );
};
