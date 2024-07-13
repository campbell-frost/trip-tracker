'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log('error: ', error);
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/dashboard');
}
