'use client';

import Image from 'next/image';
import loginImage from '/public/images/login-image.png';
import Link from 'next/link';
import axios from 'axios';
import googleIcon from '/public/icons//google.svg';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  console.log(session);
  const handleLogin = async () => {
    if (!session?.user) {
      signIn('google', { callback: '/dashboard' });
      return;
    }
  };

  useEffect(() => {
    const logIn = async () => {
      try {
        const res = await axios.post(
          'https://referbiz-api.onrender.com/api/v1/auth/login',
          {
            name: session?.user?.name,
            email: session?.user?.email,
          }
        );

        if (res.status === 200) {
          Cookies.set('token', res.data.existingUser, { sameSite: 'strict' });
          router.push('/dashboard');
        }
      } catch (error) {
        console.error(error);
      }
    };

    logIn();
  }, [session, router]);

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
        <div
          onClick={handleLogin}
          className="text-header text-sm flex-center justify-center gap-3 shadow-google rounded-full border border-light-gray px-4 py-3 cursor-pointer"
        >
          <Image src={googleIcon} alt="" height={18} width={18} />
          <span>Continue with google</span>
        </div>
        {/* <SignInButton /> */}
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

export default Page;
