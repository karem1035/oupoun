import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DownloadModal from './DownloadModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="py-5 px-3 w-full md:w-[90%] xl:w-[60%] mx-auto border-b">
        <div className="container mx-auto gap-16 flex justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={128} height={32} />{' '}
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="font-semibold text-gray-800">
              About
            </Link>
            <button
              className="bg-sky-950 py-3 px-5 rounded-lg text-xs font-bold text-white"
              onClick={openModal}
            >
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* Render the modal conditionally */}
      {isModalOpen && <DownloadModal onClose={closeModal} />}
    </>
  );
};

export default Navbar;
