import { createClient } from "@/utils/supabase/server";
import getTrips from "@/data/getTrips"
import React, { Suspense } from "react"
import { TripCard } from "../../components/TripCard";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

async function TripsContent() {
  const trips = await getTrips();
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  return (
    <div className="w-full min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">Hi Legend {user.user?.email}</h1>
        <div className="grid gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function DashBoard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <TripsContent />
    </Suspense>
  )
}