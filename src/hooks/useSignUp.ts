import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { notify } from '@/utils/copyToClipboard';

export const useSignUp = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const sendData = async () => {
    try {
      if (!session || !session?.user) return;
      const user = {
        name: session?.user?.name,
        email: session?.user?.email,
      };

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(user),
      });

      // const data = await res.json();

      if (res.status === 200) {
        // Cookies.set('token',
        //   data.token,
        //   { sameSite: 'strict' }
        // );
        notify("Registration successful")
        router.push('/campaign');
      }

      if (res.status === 409) {
        router.push('/login');
      }
    } catch (error:any) {
      console.error(error)
    }
  };

  return sendData
}
