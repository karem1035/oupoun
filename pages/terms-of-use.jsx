import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function TermsOfUse() {
  const { lang } = useLanguage();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fileName = lang === 'ar' ? 'ar_tc.md' : 'en_tc.md';
    fetch(`/${fileName}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [lang]);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className="prose prose-lg lg:prose-xl text-gray-800 lg:w-[70%] mt-5 md:mt-8 p-0 prose-h1:text-2xl prose-h2:text-xl"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
