import Theme from 'rspress/theme';
import { Footer } from '../components/footer';

const AfterNavTitle = () => {
  return (
    <a
      href="/"
      className="text-xs font-bold tracking-tight transition-all hover:text-[--rp-c-text-3]"
    >
      Docs
    </a>
  );
};

const Layout = () => (
  <Theme.Layout afterNavTitle={<AfterNavTitle />} bottom={<Footer />} />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
