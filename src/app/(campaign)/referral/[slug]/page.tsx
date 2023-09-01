'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setLink } from '@/store/slice/user';

const Page = ({ params }: { params: { slug: string } }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paystackLink, setPaystackLink] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userInfo = { name, email, paystackLink };
    try {
      const res = await fetch(`/api/referral/${params.slug}`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
      });

      const data = await res.json();

      dispatch(setLink({ shareLink: data.referralLink }));

      res.status === 200 && router.push('/referral/share-link');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="md:max-w-[24rem] md:mx-auto">
      <h1 className="text-header text-2xl font-semibold">
        Generate your referral link
      </h1>
      <p className="text-text-color text-sm mt-2">
        Supply your information to create a referral link for Clothing Business
      </p>
      <div className="text-left mt-12">
        <form className="flex flex-col gap-3">
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. example@gmail.com"
              required
              className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-3">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. example@gmail.com"
              required
              className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
            />
          </label>
          <label htmlFor="paystack" className="flex flex-col gap-3">
            <span>PayStack payment Link</span>
            <input
              type="paystack"
              name="paystack"
              value={paystackLink}
              onChange={(e) => setPaystackLink(e.target.value)}
              placeholder="https://paystack.com/payment/zrtaysiw"
              required
              className="px-4 py-3 rounded-full border border-[#EAECF0] text-header"
            />
            <div>
              <span>Don&apos;t have one? </span>
              <Link href="https://paystack.com/" className="text-log">
                Create a paystack account
              </Link>
            </div>
          </label>
          <div className="fixed bottom-24 left-0 w-full flex justify-center md:relative md:bottom-0 md:mt-8">
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
    </div>
  );
};

export default Page;
