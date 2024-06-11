import Theme from 'rspress/theme';
import { Footer } from '../components/footer';
const Layout = () => <Theme.Layout bottom={<Footer />} />;

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
