import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabase/server';

export async function checkAuth() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  if (user.user?.role !== 'authenticated') {
    redirect("/login?message=Not Authenticated :(");
  }

  return user;
}