import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="text-sm underline rounded">
      {lang === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
