'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import ProtectedRoute from '@/components/ProtectedRoute';

const Page = () => {
  const [select, setSelect] = useState(false);
  const [selectModal, setSelectModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Select reward type');
  const { data: session } = useSession();
  const [reward, setReward] = useState(0);
  const [socialLink, setSocialLink] = useState('');

  const handleSelectValue = (value: string) => {
    setSelectedValue(value);
    setSelect(true);
    setSelectModal((prev) => !prev);
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const campaignInfo = {
      socialLink: socialLink,
      rewardType: reward,
    };

    try {
      const res = await fetch('/api/campaign/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(campaignInfo),
      });

      reward > 0 && router.push('/success');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="md:max-w-[24rem] md:mx-auto">
        <h1 className="text-header text-2xl md:text-4xl font-semibold">
          Setup your campaign profile
        </h1>
        <p className="text-text-color text-sm md:text-lg mt-2">
          Fill your campaign information below.
        </p>
        <div className="text-left mt-12">
          <form className="flex flex-col gap-3">
            <label htmlFor="socialLink" className="flex flex-col gap-3">
              <span>Social link</span>
              <input
                type="text"
                name="socialLink"
                value={socialLink}
                onChange={(e) => setSocialLink(e.target.value)}
                placeholder="e.g. whatsapp business link, instagram page..."
                required
                className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
              />
            </label>
            <label htmlFor="reward" className="flex flex-col gap-3">
              <span>Reward type</span>
              <div
                onClick={() => setSelectModal((prev) => !prev)}
                className="px-4 py-3 rounded-full border border-[#EAECF0] relative"
              >
                <span className={`${!select && 'text-gray-400'}`}>
                  {selectedValue}
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  {selectModal ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {selectModal && (
                <div className="shadow-dropdownShadow rounded-lg border border-light-gray flex flex-col gap-1">
                  <div
                    onClick={() => handleSelectValue('Fixed Reward')}
                    className="px-2 py-3 flex flex-col gap-1 cursor-pointer"
                  >
                    <div className="text-sm font-medium text-gray">
                      Fixed Reward
                    </div>
                    <p className="text-xs text-text-color">
                      This rewards the referrer with a fixed amount
                    </p>
                  </div>
                  <div
                    onClick={() => handleSelectValue('Percentage-based Reward')}
                    className="px-2 py-3 flex flex-col gap-1 cursor-pointer"
                  >
                    <div className="text-sm font-medium text-gray">
                      Percentage-based Reward
                    </div>
                    <p className="text-xs text-text-color">
                      This rewards the referrer based on the product percentage.
                    </p>
                  </div>
                </div>
              )}
            </label>
            {selectedValue === 'Fixed Reward' && (
              <label htmlFor="amount" className="flex flex-col gap-3 relative">
                <span>How much?</span>
                <input
                  type="number"
                  name="amount"
                  value={reward}
                  onChange={(e) => setReward(Number(e.target.value))}
                  placeholder="0.00"
                  required
                  className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
                />
                <span className="absolute right-4 top-1/2 translate-y-2 text-gray-500">
                  ₦
                </span>
              </label>
            )}
            <div className="fixed bottom-24 left-0 w-full flex justify-center md:relative md:bottom-0 md:mt-8">
              <button
                onClick={handleSubmit}
                disabled={reward <= 0}
                className={`px-4 py-3 rounded-full mx-auto text-text-color w-[85%] text-sm cursor-not-allowed ${
                  reward > 0 ? 'btn cursor-pointer' : 'bg-gray-200'
                }`}
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
