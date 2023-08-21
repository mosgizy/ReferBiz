'use client';

import Image from 'next/image';
import share from '/public/icons/camp-share.svg';
import copyIcon from '/public/icons/copy.svg';
import whatsappIcon from '/public/icons/whatsapp.svg';
import instagramIcon from '/public/icons/instagram.svg';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { handleCopyToClipboard } from '@/utils/copyToClipboard';

const Page = () => {
  const router = useRouter();

  const handleSocial = (social: string, text: string) => {
    router.push(`https://api.whatsapp.com/send?text=${text}%20${social}`);
  };

  return (
    <>
      <div className="flex justify-center">
        <Image src={share} alt="" height={64} width={64} />
      </div>
      <div>
        <h1 className="text-header text-2xl font-semibold mt-9">
          Here’s your referral link
        </h1>
        <div className="flex-center justify-between border border-light-gray bg-fade-gray mt-4">
          <span>https://referalbiz.com/clothing-busines.?daniel</span>
          <Image
            src={copyIcon}
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
            onClick={() =>
              handleCopyToClipboard(
                'https://referalbiz.com/clothing-busines.?daniel'
              )
            }
          />
        </div>
      </div>
      <div className="my-16 flex flex-col gap-4">
        <div className="text-xs text-text-color">Example with Testimonal</div>
        <div className="shadow-btn-shadow rounded-lg overflow-hidden">
          <div className="text-xs font-medium py-3 px-3 bg-green-500 text-white">
            TESTIMONIAL FROM DANIEL
          </div>
          <div className="text-header text-sm font-semibold py-4 px-3">
            They sell top notch sneakers. I even bought it at a lesser price for
            real!!
          </div>
        </div>
        <p className="text-xs text-text-color">
          Testimonial gives you a better chance at convincing customers to buy
          from this vendor.
        </p>
      </div>
      <div>
        <h1 className="text-xs text-text-color font-medium">
          Share with testimonial to
        </h1>
        <div className="flex flex-col justify-center gap-5 mt-5">
          <button className="flex-center justify-center gap-4 py-[0.375rem] border border-light-gray shadow-google">
            <Image src={whatsappIcon} alt="" height={40} width={40} />
            <span>WhatsApp</span>
          </button>
          <button className="flex-center justify-center gap-4 py-[0.375rem] border border-light-gray shadow-google">
            <Image src={instagramIcon} alt="" height={40} width={40} />
            <span>Instagram</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
