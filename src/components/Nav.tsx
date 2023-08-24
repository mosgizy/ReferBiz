'use client';

import Image from 'next/image';
import hamburger from '/public/icons/hamburger.svg';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import GetStartedBtn from './GetStartedBtn';

const Nav = () => {
  const { status } = useSession();
  const router = useRouter();
  const [navDrop, setNavDrop] = useState(false);

  const toggleNavDrop = () => {
    setNavDrop((prev) => !prev);
    document.body.style.overflow = navDrop ? 'auto' : 'hidden';
  };

  const handleAuth = () => {
    status === 'authenticated' ? signOut() : router.push('/register');
    toggleNavDrop();
  };

  return (
    <>
      <nav className="fixed w-full z-50">
        <div className="px-6 py-3 md:py-2 mt-4 md:mt-10 mx-6 rounded-full bg-white flex justify-between items-center">
          <Link
            href="/"
            className="text-header text-lg font-bold cursor-pointer"
          >
            ReferBiz
          </Link>
          <div className="flex-center gap-5">
            <Image
              onClick={toggleNavDrop}
              src={hamburger}
              alt=""
              width={36}
              height={36}
              priority
              className="cursor-pointer"
            />
            <div className="hidden md:block">
              <GetStartedBtn />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`absolute inset-0 px-6 py-4 bg-white transition-all z-50 ${
          navDrop ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <header>
          <nav className="flex-center justify-between">
            <Link
              href="/"
              onClick={toggleNavDrop}
              className="text-header text-lg font-bold cursor-pointer"
            >
              ReferBiz
            </Link>
            <FaTimes onClick={toggleNavDrop} className="cursor-pointer" />
          </nav>
        </header>

        <div className="flex-center flex-col gap-6 absolute w-full bottom-12 left-0">
          <div className="text-gray cursor-pointer" onClick={handleAuth}>
            {status === 'authenticated' ? 'Logout' : 'Login'}
          </div>
          <Link href="/dashboard" className="btn text-white">
            Get started for free
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
