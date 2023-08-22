'use client';

import Image from 'next/image';
import { useSignUp } from '@/hooks/useSignUp';
import { signIn, useSession } from 'next-auth/react';
import googleIcon from '/public/icons//google.svg';

const SignInButton = ({ providerId }: { providerId?: string }) => {
  const sendData = useSignUp();

  return (
    <div
      onClick={() => signIn('google', { callback: '/register' })}
      className="text-header text-sm flex-center justify-center gap-3 shadow-google rounded-full border border-light-gray px-4 py-3 cursor-pointer"
    >
      <Image src={googleIcon} alt="" height={18} width={18} />
      <span>Continue with google</span>
    </div>
  );
};

export default SignInButton;
