import React, { Suspense } from 'react';
import { checkAuth } from '@/data/checkAuth';
import TripForm from '../../../components/TripForm';
import FormSkeleton from '@/components/skeletons/FormSkeleton';
export default async function Page() {
  checkAuth();

  return (
    <Suspense fallback={<FormSkeleton />}>
          <TripForm
          create={true}
          initialName={''}
          initialDate={''}
          initialDrug={[]}
          initialPeople={[]}
        />
    </Suspense>
  );
}
