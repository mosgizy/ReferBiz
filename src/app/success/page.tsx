'use client';

import { useRouter } from 'next/navigation';
import success from '/public/icons/Success.gif';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/dashboard');
  };

  return (
    <section className="section mt-16">
      <div className="flex justify-center">
        <Image src={success} alt="Success" height={225} width={225} />
      </div>
      <h1 className="text-header text-2xl font-semibold">
        Campaign setup successful!
      </h1>
      <p className="text-sm text-text-color mt-5">
        You are done setting up your campaign. Go to the dashboard to start
        using our referral program
      </p>
      <button onClick={handleSubmit} className="btn text-white mt-9">
        Go to dashboard
      </button>
    </section>
  );
};

export default Page;
