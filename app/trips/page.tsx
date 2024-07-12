'use server'

import React, { Suspense } from 'react';
import { columns } from '../../components/Columns';
import { Trips } from '../../components/TripsList';
import { checkAuth } from '@/data/checkAuth';
import getTrips from '@/data/getTrips';
import TripsTableSkeleton from '@/components/skeletons/TripsTableSkeleton';

export default async function Page() {
  await checkAuth();
  const trips = await getTrips();
  
  return (
    <Suspense fallback={<TripsTableSkeleton />}>
      <Trips columns={columns} data={trips} />
    </Suspense>
  );
}
