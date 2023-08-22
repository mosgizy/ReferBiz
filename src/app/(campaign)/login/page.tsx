'use client';

import Image from 'next/image';
import loginImage from '/public/images/login-image.png';
import SignInButton from '@/components/SigninButton';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className="flex-center justify-center mt-12">
        <Image src={loginImage} alt="" height={500} width={250} priority />
      </div>
      <div className="mt-16">
        <h1 className="font-semibold text-3xl text-header">Welcome back</h1>
        <p className="text-text-color text-sm mt-2">
          Let us resume from where we stopped at
        </p>
      </div>
      <div className="[&>p]:text-text-color sticky bottom-0 [&>p]:text-xs mt-8 flex flex-col gap-6">
        <SignInButton />
        <p>
          Don’t have an account?{' '}
          <Link href={'/register'} className="text-log cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default page;
