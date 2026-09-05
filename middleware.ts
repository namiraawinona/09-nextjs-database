import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Satpam akan menjaga semua halaman KECUALI file gambar dan API
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};