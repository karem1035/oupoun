import translations from '@/locales/pp_translations';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div
      className="flex flex-col items-center justify-center p-6"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="text-start leading-loose text-lg font-medium lg:w-[70%]">
        <h1 className="md:text-3xl text-2xl md:my-5 mt-5 font-bold">
          {t.title}
        </h1>

        {Object.entries(t.sections).map(([key, section]) => (
          <div key={key}>
            <h2 className="text-2xl font-bold mt-8 mb-4">{section.title}</h2>
            {section.content.map((item, index) => (
              <div key={index}>
                {typeof item === 'string' ? (
                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ) : (
                  <ul className="list-disc pl-8 mb-4">
                    {item.list.map((listItem, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: listItem }}
                      />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
