'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import googleIcon from '/public/icons//google.svg';

const SignInButton = ({ providerId }: { providerId?: string }) => {
  return (
    <div
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="text-header text-sm flex-center justify-center gap-3 shadow-google rounded-full border border-light-gray px-4 py-3 cursor-pointer"
    >
      <Image src={googleIcon} alt="" height={18} width={18} />
      <span>Continue with google</span>
    </div>
  );
};

export default SignInButton;
