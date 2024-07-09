import React from 'react';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Back from '@/components/Back';
import Auth from '@/components/Auth';

interface SignupProps {
  searchParams: { message: string };
}

export default function Signup({ searchParams }: SignupProps) {
  const signUp = async (formData: FormData) => {
    'use server';
    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });
    if (error) {
      console.log('error: ', error);
      return redirect('/signup?message=Could not create user');
    }
    return redirect('/login?message=Check email to continue sign up process');
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Back url="/" login={true} />
      <Auth
        title="Sign Up"
        description="Already have an account?"
        searchParams={searchParams}
        onSubmit={signUp}
      />
    </div>
  );
}
