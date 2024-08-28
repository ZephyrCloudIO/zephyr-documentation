import Theme from 'rspress/theme';
import { Footer } from '../components/footer';

const AfterNavTitle = () => {
  return <div className="text-xs font-bold tracking-tight">Docs</div>;
};

const Layout = () => (
  <Theme.Layout afterNavTitle={<AfterNavTitle />} bottom={<Footer />} />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
