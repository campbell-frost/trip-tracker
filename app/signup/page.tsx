import React, { Suspense } from 'react';
import Auth from '@/components/Auth';
import AuthSkeleton from '@/components/skeletons/AuthSkeleton';
import signUp from '@/data/signUp';

interface SignupProps {
  searchParams: { message: string };
}

export default function Signup({ searchParams }: SignupProps) {
  return (
    <Suspense fallback={<AuthSkeleton />}>
      <Auth
        title="Sign Up"
        description="Already have an account?"
        searchParams={searchParams}
        onSubmit={signUp}
      />
    </Suspense>
  );
}
