import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';
import DownloadModal from './DownloadModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="py-5 px-4 w-full md:w-[90%] xl:w-[60%] mx-auto border-b relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={32} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about-us" className="font-semibold text-gray-800">
              About
            </Link>
            <button
              className="bg-sky-950 py-3 px-5 rounded-lg text-xs font-bold text-white"
              onClick={toggleModal}
            >
              Download
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-5 space-y-4 md:hidden">
            <Link
              href="/about-us"
              className="text-gray-800 text-lg"
              onClick={toggleMenu}
            >
              About
            </Link>
            <button
              className="bg-sky-950 py-3 px-5 rounded-lg text-sm font-bold text-white w-full"
              onClick={() => {
                toggleModal();
                toggleMenu();
              }}
            >
              Download
            </button>
          </div>
        )}
      </nav>

      {/* Download Modal */}
      {isModalOpen && <DownloadModal onClose={toggleModal} />}
    </>
  );
};

export default Navbar;
