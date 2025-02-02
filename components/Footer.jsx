import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/locales/translations';

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className=" flex flex-col md:flex-row items-center border-t justify-center gap-2 md:gap-10  text-center md:py-6 py-3 mt-10">
      <div className="flex gap-6 text-base md:gap-3 text-blue-700 font-medium">
        <Link href="/terms-of-use">{t.terms}</Link>
        <Link href="/privacy-policy">{t.privacy}</Link>
        <Link href="/about-us">{t.about}</Link>
      </div>
      <p className="text-sm">Copyright © {new Date().getFullYear()} Oupoun.</p>
    </footer>
  );
};

export default Footer;
