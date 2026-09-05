'use server';

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // Kita ubah formData menjadi objek agar bisa disisipkan instruksi 'redirectTo'
    const formDataObj = Object.fromEntries(formData);
    
    // Paksa pindah ke halaman utama '/' setelah login sukses
    await signIn('credentials', { ...formDataObj, redirectTo: '/' });
    
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    // throw error ini wajib tetap ada agar proses redirect jalan
    throw error;
  }
}