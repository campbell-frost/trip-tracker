import React from 'react';
import { checkAuth } from '@/data/checkAuth';
import TripForm from '../TripForm';
export default async function Page() {
  checkAuth();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl mt-8">
        <TripForm
          create={true}
          initialName={''}
          initialDate={''}
          initialDrug={[]}
          initialPeople={[]}
        />
      </div>
    </div>
  );
}
