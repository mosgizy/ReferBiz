'use client';

import Image from 'next/image';
import share from '/public/icons/camp-share.svg';
import copyIcon from '/public/icons/copy.svg';
import whatsappIcon from '/public/icons/whatsapp.svg';
import xIcon from '/public/icons/x.svg';
import { handleCopyToClipboard } from '@/utils/copyToClipboard';
import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Page = () => {
  const [modalState, setModalState] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const shareLink = useSelector((state: RootState) => state.user.shareLink);

  const handleModalState = (title?: string) => {
    setModalTitle(title as string);
    setModalState((prev) => !prev);
  };

  return (
    <div className="md:max-w-[24rem] md:mx-auto">
      <div className="flex justify-center">
        <Image src={share} alt="" height={64} width={64} />
      </div>
      <div>
        <h1 className="text-header text-2xl font-semibold mt-9">
          Here’s your referral link
        </h1>
        <div className="flex-center justify-between border border-light-gray bg-fade-gray mt-4">
          <span>{shareLink}</span>
          <Image
            src={copyIcon}
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
            onClick={() => handleCopyToClipboard(shareLink)}
          />
        </div>
      </div>
      <div className="mt-[4.5rem]">
        <h1 className="text-xs text-text-color font-medium">
          Share with testimonial to
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
          <button
            onClick={() => handleModalState('Share to Whatsapp')}
            className="flex-center justify-center gap-4 py-[0.375rem] px-6 border border-light-gray shadow-google rounded-[3rem]"
          >
            <Image
              src={whatsappIcon}
              alt=""
              height={40}
              width={40}
              className="md:w-8 md:h-8"
            />
            <span className="md:hidden">WhatsApp</span>
          </button>
          <button
            onClick={() => handleModalState('Share to Twitter')}
            className="flex-center justify-center gap-4 py-[0.375rem] px-6 border border-light-gray shadow-google rounded-[3rem]"
          >
            <Image
              src={xIcon}
              alt=""
              height={40}
              width={40}
              className="md:w-8 md:h-8"
            />
          </button>
        </div>
      </div>
      {modalState && (
        <Modal
          handleModal={handleModalState}
          title={modalTitle}
          url={shareLink}
        />
      )}
    </div>
  );
};

export default Page;
