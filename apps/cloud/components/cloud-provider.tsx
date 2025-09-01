import { SiteConfig, type CardItemProps } from '@zephyr-docs/shared';
import {
  AkamaiIcon,
  CloudflareIcon,
  FastlyIcon,
  NetlifyIcon,
  Card,
} from '@zephyr-docs/shared';

export const CloudProviderCards = () => {
  return (
    <>
      {SiteConfig.cloud.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </>
  );
};

const item = {
  title: 'Add Environments',
  href: '/how-to/environments',
  description:
    'Configure custom domain for your application with your deployment integration platform.',
  variant: 'default',
  icons: [<CloudflareIcon />, <NetlifyIcon />, <FastlyIcon />, <AkamaiIcon />],
} satisfies CardItemProps;

export const CustomDomain = () => {
  return (
    <>
      <Card item={item} />
    </>
  );
};
