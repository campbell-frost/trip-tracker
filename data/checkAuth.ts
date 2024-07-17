'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabase/server';

export async function checkAuth() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  console.log(user);
  if (user.user?.role !== 'authenticated') {
    redirect('/login?message=Not Authenticated :(');
  }

  return user;
}
