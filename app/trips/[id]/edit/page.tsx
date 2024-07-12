import React, { Suspense } from 'react';
import TripForm from '../../../../components/TripForm';
import { checkAuth } from '@/data/checkAuth';
import getTripById from '@/data/getTripById';
import FormSkeleton from '@/components/skeletons/FormSkeleton';

interface EditProps {
  params: { id: string };
}

export default async function Edit({ params }: EditProps) {
  checkAuth();
  const trip = await getTripById({params});
  
  return (
    <Suspense fallback={<FormSkeleton />}>
      <TripForm
        create={false}
        id={trip.id}
        initialName={trip.name || ''}
        initialDate={trip.date || ''}
        initialDrug={trip.drug || []}
        initialPeople={trip.people || []}
      />
    </Suspense>
    );
}
