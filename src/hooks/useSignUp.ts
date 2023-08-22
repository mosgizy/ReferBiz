import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useSignUp = () => {
  const { data: session } = useSession();
  const router = useRouter();

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

      if (response.status === 200) {
        Cookies.set('token',
          response.data.existingUser,
          { sameSite: 'strict' }
        );
        
        router.push('/campaign');
      }
    } catch (error:any) {
      console.error(error);
      if (error.response.status === 401) {
        router.push('/login');
      }
    }
  };

  return sendData
}
