'use client';

import Image from 'next/image';
import shareImage from '/public/images/share.svg';
import encourageImage from '/public/images/encourage.svg';
import growthImage from '/public/images/growth.svg';

interface cardDetailsI {
  [key: string]: {
    icon: string;
    title: string;
    info: string;
  };
}

const ProcessCard = () => {
  const cardDetails: cardDetailsI = {
    share: {
      icon: shareImage,
      title: 'Share campaign links',
      info: 'Give your customers a unique referral link by whatsapp or instagram',
    },
    encourage: {
      icon: encourageImage,
      title: 'Encourage Customer',
      info: 'Encourage your customers to share their referral link with rewards and custom gifts.',
    },
    growth: {
      icon: growthImage,
      title: 'Sales Growth',
      info: 'Watch your revenue grow as your customer refer their friends',
    },
  };

  return (
    <div className="flex flex-col gap-12 mt-14">
      {Object.keys(cardDetails).map((card, index) => {
        const details = cardDetails[card];
        return (
          <div key={index}>
            <div className="flex justify-center">
              <Image
                src={details.icon}
                alt=""
                height={200}
                width={250}
                priority
              />
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-lg text-header">
                {details.title}
              </h2>
              <p className="text-text-color text-sm mt-3">{details.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProcessCard;
