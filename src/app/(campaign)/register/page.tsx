'use client';

import { getServerSession } from 'next-auth';
import Image from 'next/image';
import registerImage from '/public/images/register-image.png';
import axios from 'axios';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { signIn, useSession } from 'next-auth/react';
import LoginButton from '../../../components/SigninButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

  const sendData = async () => {
    try {
      if (!session || !session?.user) return;
      const response = await axios.post(
        'https://referbiz-api.onrender.com/api/v1/auth/signup',
        {
          name: session?.user.name,
          email: session?.user.email,
        }
      );

      console.log(response.data.message);

      if (response.data.message === 'User already exists') {
        router.push('/login');
      }

      if (response.data.message === 'Registration Successful') {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  sendData();

  return (
    <>
      <div className="flex-center justify-center">
        <Image src={registerImage} alt="" height={500} width={250} priority />
      </div>
      <div className="mt-16">
        <h1 className="font-semibold text-3xl text-header">
          Create your account
        </h1>
        <p className="text-text-color text-sm mt-2">
          Note that after you create your account, you would be required to
          supply your paystack payment link for a proper campaign setup
        </p>
      </div>
      <div className="[&>p]:text-text-color [&>p]:text-xs mt-8 flex flex-col gap-6">
        <p>
          By clicking the button below, you agree to our{' '}
          <span className="text-log">terms and agreement</span>
        </p>
        <LoginButton providerId={``} />
        <p>
          Already have an account?{' '}
          <Link href={'/login'} className="text-log">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};

export default Page;
