'use client';

import Image from 'next/image';
import share from '/public/icons/camp-share.svg';
import copyIcon from '/public/icons/copy.svg';
import whatsappIcon from '/public/icons/whatsapp.svg';
import instagramIcon from '/public/icons/instagram.svg';
import { handleCopyToClipboard } from '@/utils/copyToClipboard';
import Modal from '@/components/Modal';
import { useState } from 'react';

const Page = () => {
  const [modalState, setModalState] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleModalState = (title: string) => {
    setModalTitle(title);
    setModalState((prev) => !prev);
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
      <div className="mt-[4.5rem]">
        <h1 className="text-xs text-text-color font-medium">
          Share with testimonial to
        </h1>
        <div className="flex flex-col justify-center gap-5 mt-5">
          <button
            onClick={() => handleModalState('Share to Whatsapp')}
            className="flex-center justify-center gap-4 py-[0.375rem] border border-light-gray shadow-google"
          >
            <Image src={whatsappIcon} alt="" height={40} width={40} />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => handleModalState('Share to Twitter')}
            className="flex-center justify-center gap-4 py-[0.375rem] border border-light-gray shadow-google"
          >
            <Image src={instagramIcon} alt="" height={40} width={40} />
            <span>Twitter</span>
          </button>
        </div>
      </div>
      {modalState && (
        <Modal
          handleModal={handleModalState}
          title={modalTitle}
          url={'https://referalbiz.com/clothing-busines.?daniel'}
        />
      )}
    </>
  );
};

export default Page;
