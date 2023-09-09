'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Loader from './Loader';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { status } = useSession();
  const token = Cookies.get('token');

  //todo: use httpOnly token to validate token for protected routes

  useEffect(() => {
    if (status !== 'authenticated' && !token) {
      router.push('/login');
    }
  }, [status, router, token]);

  return status !== 'authenticated' && !token ? <Loader /> : <>{children}</>;
};

export default ProtectedRoute;
