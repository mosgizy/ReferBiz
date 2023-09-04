'use client';

import Image from 'next/image';
import loginImage from '/public/images/login-image.png';
import Link from 'next/link';
import googleIcon from '/public/icons//google.svg';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { notify } from '@/utils/copyToClipboard';

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleLogin = async () => {
    signIn('google', { callback: '/dashboard' });
  };

  const logIn = async () => {
    try {
      const user = {
        name: session?.user?.name,
        email: session?.user?.email,
      };

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.status === 200) {
        Cookies.set('token', data.token, { sameSite: 'strict' });
        notify('Login successful');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      logIn();
    }

    //eslint-disable-next-line
  }, [status, router]);

  return (
    <div className="md:flex-center md:gap-8 md:section">
      <div className="flex-center justify-center flex-[1_1_50%] md:bg-[#F3F9ED] md:rounded-[3rem] md:h-[40rem] md:w-[32rem] md:py-24 md:px-20">
        <Image
          src={loginImage}
          alt=""
          height={800}
          width={450}
          priority
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-12 flex-[1_1_45%]">
        <div className="mt-16 flex flex-col">
          <h1 className="font-semibold text-3xl md:text-4xl text-header">
            Welcome back
          </h1>
          <p className="text-text-color text-sm mt-2">
            Let us resume from where we stopped at
          </p>
        </div>
        <div className="[&>p]:text-text-color sticky bottom-0 [&>p]:text-xs mt-8 flex flex-col gap-6">
          <div
            onClick={handleLogin}
            className="text-header text-sm flex-center justify-center gap-3 shadow-google rounded-full border border-light-gray px-4 py-3 cursor-pointer"
          >
            <Image src={googleIcon} alt="" height={18} width={18} />
            <span>Continue with google</span>
          </div>
          <p>
            Don’t have an account?{' '}
            <Link href={'/register'} className="text-log cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
