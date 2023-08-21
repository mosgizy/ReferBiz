'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    name !== '' && router.push('/share-link');
  };

  return (
    <>
      <h1 className="text-header text-2xl font-semibold">
        Generate your referral link
      </h1>
      <p className="text-text-color text-sm mt-2">
        Supply your information to create a referral link for Clothing Business
      </p>
      <div className="text-left mt-12">
        <form className="flex flex-col gap-3">
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Daniel Osonuga"
              required
              className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-3">
            <span>Full Name</span>
            <input
              type="email"
              name="email"
              placeholder="e.g. example@gmail.com"
              required
              className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
            />
          </label>
          <div className="fixed bottom-24 left-0 w-full flex justify-center">
            <button
              disabled={name === ''}
              onClick={handleSubmit}
              className={`px-4 py-3 rounded-full mx-auto text-text-color w-[85%] text-sm cursor-not-allowed ${
                name !== '' ? 'btn cursor-pointer' : 'bg-gray-200'
              }`}
            >
              Generate referral link
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
