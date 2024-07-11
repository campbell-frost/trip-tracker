'use server'

import React from 'react';
import { columns } from './Columns';
import { Trips } from './TripsList';
import { checkAuth } from '@/data/checkAuth';
import getTrips from '@/data/getTrips';

export default async function Page() {
  await checkAuth();
  const trips = await getTrips();
  return (
    <div className="container mx-auto py-10">
      <Trips columns={columns} data={trips} />
    </div>
  );
}
