import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

// Buttons
import GooglePlayButton from '@/components/GooglePlayButton';
import AppStoreButton from '@/components/AppStoreButton';

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const t_features = translations[lang].features;

  return (
    <div className="flex flex-col text-gray-900 items-center justify-center ">
      {/* Hero */}
      <div className="mx-auto flex flex-col pt-10 items-center justify-center min-h-[60vh]">
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold ${
            lang === 'en' ? 'md:w-[50%]' : 'md:w-[80%]'
          } text-center`}
        >
          {t.title}
        </h1>
        <p className="md:text-xl font-bold text-gray-600 mt-5 md:w-[60%] text-center">
          {t.description}
        </p>
        <div class="flex flex-col md:flex-row items-center gap-4 mt-5 justify-center">
          <GooglePlayButton />
          <AppStoreButton />
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col items-center mt-10 ">
        <h1 className="md:text-5xl text-3xl md:my-5 mt-5 md:w-[80%] leading-10 text-center font-bold">
          {t_features.header}
        </h1>
        {/* Feature cards */}
        <div
          className={`grid md:grid-cols-3 lg:w-[80%] py-10 ${
            lang === 'ar' ? 'gap-20' : 'gap-14 lg:gap-0'
          }`}
        >
          {/* Card 1 */}
          <div className="flex flex-col items-center ">
            <Image
              src="/images/1-download.png"
              alt="Feature 1"
              className="mb-5"
              width={300}
              height={300}
            />
            <p className="text-2xl font-bold mb-2">{t_features.feature1}</p>
            <p className="text-center font-semibold md:w-[80%]">
              {t_features.feature1Desc}
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/2-createAccount.png"
              alt="Feature 2"
              className="mb-5"
              width={300}
              height={300}
            />
            <p className="text-2xl font-bold mb-2">{t_features.feature2}</p>
            <p className="text-center   font-semibold md:w-[80%]">
              {t_features.feature2Desc}
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/3-enjoy.png"
              alt="Feature 3"
              className="mb-5"
              width={300}
              height={300}
            />
            <p className="text-2xl font-bold mb-2">{t_features.feature3}</p>
            <p className="text-center  font-semibold md:w-[80%]">
              {t_features.feature3Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Download The app */}
      <div className="flex flex-col items-center bg-blue-50 w-[100%] lg:w-[70%] rounded-3xl gap-10 p-10 lg:p-20 m-10 md:mt-20">
        <h1 className="font-bold text-3xl lg:text-4xl">
          {lang === 'en' ? 'Download The App Today' : 'قم بتنزيل التطبيق اليوم'}
        </h1>
        <div class="flex flex-col md:flex-row items-center gap-4  justify-center">
          <GooglePlayButton />
          <AppStoreButton />
        </div>
      </div>
    </div>
  );
}
