import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import visitor from '/public/images/visitor.jpeg';
import heroImage from '/public/images/hero-image.png';
import Link from 'next/link';
import GetStartedBtn from './GetStartedBtn';

const Header = () => {
  return (
    <header className="bg-focus-bg text-white min-h-screen pt-40 md:p-32 px-4 pb-8">
      <div className="md:max-w-[90rem] md:mx-auto md:flex-center md:justify-between md:gap-12">
        <div className="flex flex-col gap-4 md:justify-between">
          <h1 className="text-4xl font-semibold leading-[2.75rem]">
            Turn one time customers into customer <span>for life</span>
          </h1>
          <p className="text-base">
            increase your sales revenue, by rewarding customer loyalty through
            our powerful referral program.
          </p>
          <div className="text-sm font-semibold flex-center gap-4 mt-2">
            <GetStartedBtn />
            <span className="flex-center gap-1">
              Request Demo <FaChevronRight />
            </span>
          </div>
          <div className="flex-center gap-2">
            <div className="flex-center -space-x-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Image
                  src={visitor}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full w-7 h-7"
                  key={index}
                />
              ))}
            </div>
            <div className="text-xs">join 100+ vendors</div>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <Image
            src={heroImage}
            alt=""
            width={1200}
            height={1200}
            priority
            className="w-full md:max-w-[33rem] md:max-h-[26rem]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
