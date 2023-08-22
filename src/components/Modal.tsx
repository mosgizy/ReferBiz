'use client';

import Image from 'next/image';
import infoIcon from '/public/icons/info.svg';
import { FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react';

interface modalProps {
  handleModal: () => void;
  title: string;
  url: string;
}

const Modal = ({ handleModal, title, url }: modalProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event: any) => {
    const newText = event.target.value;

    const words = newText.trim().split(/\s+/);

    if (words.length > 50) {
      let temp = words.slice(0, 50).join(' ');
      setText(temp);
      setWordCount(50);

      // text are still being input but not as word

      // if (textRef.current) {
      //   textRef.current.value = temp;
      // }
    }

    if (words.length <= 50) {
      setWordCount(words.length);
      setText(newText);
    }
  };

  function shareOnSocialMedia(shareUrl: string): void {
    window.open(shareUrl, '_blank');
  }

  const handleSocialShare = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`${text}`);

    if (title.endsWith('Whatsapp')) {
      shareOnSocialMedia(
        `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`
      );
    }

    if (title.endsWith('Twitter')) {
      shareOnSocialMedia(
        `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
      );
    }
  };

  return (
    <div className="fixed inset-0 flex-center justify-center bg-background-blur">
      <div
        onClick={(e) => e.preventDefault()}
        className="px-6 border border-fade-gray text-left max-w-[20rem] mx-auto bg-white rounded-2xl"
      >
        <div className="flex-center justify-between py-3">
          <div className="text-lg font-semibold">{title}</div>
          <FaTimes onClick={handleModal} className="cursor-pointer" />
        </div>
        <div className="mb-6">
          <form>
            <label htmlFor="testimony" className="text-sm">
              Write your testimonial
              <textarea
                name=""
                id=""
                ref={textRef}
                value={text}
                onChange={handleTextChange}
                placeholder="Enter message (Optional)"
                className="w-full h-48 mt-1 px-4 py-3 rounded-lg border border-gray-200"
              ></textarea>
              <div className="flex justify-end">
                <span className="text-right">{wordCount}/50</span>
              </div>
            </label>
            <button
              onClick={handleSocialShare}
              className="btn w-full mt-5 text-white text-sm font-semibold"
            >
              Share
            </button>
          </form>
        </div>
        <div className="mb-4">
          <div className="flex flex-col gap-4 text-center">
            <div className="flex-center flex-col gap-2">
              <Image
                src={infoIcon}
                alt=""
                height={16}
                width={16}
                title="put tooltip here"
                className="cursor-pointer"
              />
              <span className="text-xs text-text-color">
                Example with Testimonal
              </span>
            </div>
            <div className="shadow-btn-shadow rounded-lg overflow-hidden">
              <div className="text-xs font-medium py-3 px-3 bg-green-500 text-white">
                TESTIMONIAL FROM DANIEL
              </div>
              <div className="text-header text-sm font-semibold py-4 px-3">
                They sell top notch sneakers. I even bought it at a lesser price
                for real!!
              </div>
            </div>
            <p className="text-xs text-text-color">
              Testimonial gives you a better chance at convincing customers to
              buy from this vendor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
