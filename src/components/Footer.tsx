import Image from 'next/image';
import xIcon from '/public/icons/x.svg';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = ({ bottom }: { bottom?: boolean }) => {
  const date = new Date().getFullYear();
  return (
    <footer
      className={`bg-white mt-12 ${bottom && 'fixed bottom-0 left-0 w-full'}`}
    >
      <div className="p-4 flex-center justify-between border-t border-[#EAECF0]">
        <div className="flex-center gap-3">
          <Link
            href="/"
            className="text-header text-lg font-bold cursor-pointer"
          >
            ReferBiz
          </Link>
          <span>&copy; {date}</span>
        </div>
        <div className="flex-center gap-4">
          <FaWhatsapp />
          <Image src={xIcon} alt="" height={16} width={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
