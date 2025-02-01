import { useLanguage } from '../contexts/LanguageContext';
import translations from '@/locales/translations';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <div
      className="flex flex-col items-center justify-center text-gray-900"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <h1 className="md:text-5xl text-3xl md:my-5 mt-5 font-bold">{t.title}</h1>
      <div className="leading-loose text-lg font-medium lg:w-[50%] mt-5 md:mt-8">
        <p
          className="mb-10"
          dangerouslySetInnerHTML={{ __html: t.paragraph1 }}
        />
        <p
          className="mb-10"
          dangerouslySetInnerHTML={{ __html: t.paragraph2 }}
        />
        <p dangerouslySetInnerHTML={{ __html: t.paragraph3 }} />
      </div>
    </div>
  );
}
