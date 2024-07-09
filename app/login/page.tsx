import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Back from '@/components/Back';
import Auth from '@/components/Auth';

interface LoginProps {
  searchParams: { message: string };
}

export default function Login({ searchParams }: LoginProps) {
  const signIn = async (formData: FormData) => {
    'use server';
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
    return redirect('/trips');
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Back url="/" login={true} />
      <Auth
        title="Login"
        description="Don't have an account?"
        searchParams={searchParams}
        onSubmit={signIn}
      />
    </div>
  );
}
