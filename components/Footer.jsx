import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 text-white text-center py-6 mt-10">
      <div className="flex gap-6 text-md md:gap-3 text-blue-300">
        <Link href="/contact">Terms of Use</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <p className="text-sm">Copyright © {new Date().getFullYear()} Outpoun.</p>
    </footer>
  );
};

export default Footer;
