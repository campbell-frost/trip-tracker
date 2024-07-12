import React, { Suspense } from 'react';
import Auth from '@/components/Auth';
import AuthSkeleton from '@/components/skeletons/AuthSkeleton';
import signIn from '@/data/signIn';

interface LoginProps {
  searchParams: { message: string };
}

export default function Login({ searchParams }: LoginProps) {
  return (
    <Suspense fallback={<AuthSkeleton />}>
      <Auth
        title="Login"
        description="Don't have an account?"
        searchParams={searchParams}
        onSubmit={signIn}
      />
    </Suspense>
  );
}
