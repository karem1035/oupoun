import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import DownloadModal from './DownloadModal';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].navbar;

  const menuRef = useRef(null);
  const modalRef = useRef(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setIsMenuOpen(false);
      }
    };

    if (isModalOpen || isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, isMenuOpen]);

  // Close modal or menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen || isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, isMenuOpen]);

  return (
    <>
      <nav className="py-5 px-4 w-full md:w-[90%] xl:w-[60%] mx-auto border-b relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={32} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/about-us" className="font-semibold text-gray-800">
              {t.about}
            </Link>
            <button
              className="bg-gray-900 py-3 px-5 rounded-lg text-xs font-bold text-white"
              onClick={toggleModal}
            >
              {t.download}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-5 space-y-4 md:hidden"
          >
            <Link
              href="/about-us"
              className="text-gray-800 text-lg"
              onClick={toggleMenu}
            >
              {t.about}
            </Link>
            <button
              className="bg-gray-900 py-3 px-5 rounded-lg text-sm font-bold text-white w-full"
              onClick={() => {
                toggleModal();
                toggleMenu();
              }}
            >
              {t.download}
            </button>
            <LanguageSwitcher />
          </div>
        )}
      </nav>

      {/* Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div ref={modalRef}>
            <DownloadModal onClose={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
