import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import GooglePlayButton from './GooglePlayButton';
import AppStoreButton from './AppStoreButton';
import translations from '../locales/translations';

const DownloadModal = ({ onClose }) => {
  const { lang } = useLanguage();
  const t = translations[lang].modal;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 md:top-10 md:right-10 border text-gray-700 hover:text-gray-900 bg-gray-50 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Modal content */}
      <div className="flex flex-col items-center gap-3 ">
        <p className="font-bold text-xl w-[80%] text-center mt-10">{t.title}</p>
        {/* Qr */}
        <div className="flex justify-center">
          <Image
            src="/qrplaceholder.png"
            width={350}
            height={350}
            alt="QR Code"
            className=" opacity-80 max-w-[400px] h-auto" // Responsive classes
          />
        </div>
        {/* Download Buttons */}
        <p className="font-semibold text-sm">{t.description}</p>
        <div class="flex flex-col md:flex-row items-center gap-2 justify-center">
          {/* App Store */}
          <AppStoreButton />
          {/* Google Play */}
          <GooglePlayButton />
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
