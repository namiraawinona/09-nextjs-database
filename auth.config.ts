import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  secret: 'kunci-rahasia-super-aman-nextjs-12345',
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith('/login');

      if (isLoggedIn) {
        if (isOnLoginPage) {
          // Kalau sudah login tapi nyasar ke halaman /login, tendang ke halaman utama '/'
          return Response.redirect(new URL('/', nextUrl));
        }
        return true;
      } else {
        if (!isOnLoginPage) {
          // Kalau belum login dan mencoba buka halaman utama '/', tendang ke '/login'
          return false; 
        }
        return true;
      }
    },
  },
  providers: [],
} satisfies NextAuthConfig;