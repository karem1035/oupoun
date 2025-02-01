import Layout from '@/components/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <ScrollToTop />
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
