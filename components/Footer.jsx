import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row items-center border-t justify-center gap-2 md:gap-10  text-center md:py-6 py-3 mt-10">
      <div className="flex gap-6 text-sm md:gap-3 text-blue-700 font-medium">
        <Link href="/terms-of-use">Terms of Use</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
      <p className="text-sm">Copyright © {new Date().getFullYear()} Oupoun.</p>
    </footer>
  );
};

export default Footer;
