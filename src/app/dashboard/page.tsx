'use client';

import { FaChevronDown, FaCopy } from 'react-icons/fa';
import compShare from '/public/icons/camp-share.svg';
import Image from 'next/image';
import paymentShare from '/public/icons/pay-share.svg';
import activityImage from '/public/images/activity.svg';
import noteImage from '/public/icons/bank-note.svg';
import linkImage from '/public/icons/link.svg';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { handleCopyToClipboard } from '@/utils/copyToClipboard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { status } = useSession();
  const router = useRouter();
  const [activity, setActivity] = useState(true);

  console.log(status);

  if (status === 'unauthenticated') {
    router.push('/login');
    return;
  }

  return (
    <>
      <section className="section text-left py-4">
        <h1 className="text-base text-header py-4 font-semibold flex-center gap-1">
          <span>Clothing Business</span> <FaChevronDown />
        </h1>
        <div className="my-4 flex-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-2xl">₦ 0.00</div>
            <p className="text-xs text-text-color">Wallet balance</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-2xl">0</div>
            <p className="text-xs text-text-color">Referals</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-2xl">0</div>
            <p className="text-xs text-text-color">Links generated</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <div className="px-5 py-4 shadow-google">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-1">
                <h1 className="text-base text-header">
                  Share your generated campaign link
                </h1>
                <p className="text-text-color text-xs">
                  This campaign link is what you give referrer to start
                  referring.
                </p>
              </div>
              <Image
                onClick={() =>
                  handleCopyToClipboard(
                    'https://referalbiz.com/clothing-busines.?daniel'
                  )
                }
                src={compShare}
                alt=""
                width={64}
                height={64}
              />
            </div>
            <button
              onClick={() =>
                handleCopyToClipboard(
                  'https://referalbiz.com/clothing-busines.?daniel'
                )
              }
              className="btn bg-green-500 flex-center justify-center gap-1 text-white w-full mt-4"
            >
              <FaCopy /> COPY LINK
            </button>
          </div>
          <div className="px-5 py-4 shadow-google">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-1">
                <h1 className="text-base text-header">
                  Share your generated payment link
                </h1>
                <p className="text-text-color text-xs">
                  Share this link to customers when they want to pay through
                  referral.
                </p>
              </div>
              <Image
                onClick={() =>
                  handleCopyToClipboard(
                    'https://referalbiz.com/clothing-busines.?daniel'
                  )
                }
                src={paymentShare}
                alt=""
                width={64}
                height={64}
              />
            </div>
            <button
              onClick={() =>
                handleCopyToClipboard(
                  'https://referalbiz.com/clothing-busines.?daniel'
                )
              }
              className="btn flex-center justify-center gap-1 text-white w-full mt-4"
            >
              <FaCopy /> COPY LINK
            </button>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex-center justify-between">
            <div className="text-base font-semibold text-header">
              Referral Activity
            </div>
            <div className="text-primary-btn text-xs font-medium cursor-pointer">
              See all
            </div>
          </div>
          <div>
            {activity ? (
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex-center justify-between">
                  <div className="flex-center gap-3">
                    <Image src={noteImage} alt="" height={48} width={48} />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-header text-sm font-medium">
                        Ayo paid using Daniel...
                      </h1>
                      <p className="text-text-color text-xs">
                        Daniel . 8:30 PM
                      </p>
                    </div>
                  </div>
                  <div>₦20,000.00</div>
                </div>
                <div className="flex-center justify-between">
                  <div className="flex-center gap-3">
                    <Image src={linkImage} alt="" height={48} width={48} />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-header text-sm font-medium">
                        Referal link generated
                      </h1>
                      <p className="text-text-color text-xs">
                        Daniel . 8:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt mt-12 flex justify-center">
                <Image src={activityImage} alt="" height={100} width={100} />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer bottom={true} />
    </>
  );
};

export default Page;
