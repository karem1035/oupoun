import Layout from '@/components/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
