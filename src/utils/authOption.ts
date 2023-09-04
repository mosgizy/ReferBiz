import { NextAuthOptions, SessionStrategy } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
 providers: [
  GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    // signIn: '/register',
    // error:'http://localhost:3000/generate-link'
  },
  callbacks: {
    async redirect({ url, baseUrl }:{url:string,baseUrl:string}) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
    // async session({ session, token, user }) {
    //   session.accessToken = token.accessToken
    //   session?.user.id = token.id
    
    //   return session
    // },
    // async jwt({ token, user, account, profile }) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
  },
};