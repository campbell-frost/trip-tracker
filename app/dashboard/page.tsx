import getTrips from '@/data/getTrips';
import React, { Suspense } from 'react';
import { TripCard } from '../../components/TripCard';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';
import { checkAuth } from '@/data/checkAuth';
import { AddTripButton } from '@/components/AddButton';

async function TripsContent() {
  await checkAuth();
  const trips = await getTrips();

  return (
    <div className="w-full min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-end pb-5">
          <AddTripButton />
        </div>
        {trips.length !== 0 ? (
          <div className="grid gap-6">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-center text-foreground">No trips found.</h1>
            <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
              Start adding trips by clicking on the Add Trip button above
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function DashBoard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <TripsContent />
    </Suspense>
  );
}
