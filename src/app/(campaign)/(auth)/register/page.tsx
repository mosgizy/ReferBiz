'use client';
import Image from 'next/image';
import registerImage from '/public/images/register-image.png';
import LoginButton from '../../../../components/SigninButton';
import Link from 'next/link';
import { useSignUp } from '@/hooks/useSignUp';

const Page = () => {
  const sendData = useSignUp();

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
