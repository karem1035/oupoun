import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-6  ${
            lang === 'ar' ? 'left-6' : 'right-6'
          } bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all`}
        >
          <ArrowUpCircle size={32} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
