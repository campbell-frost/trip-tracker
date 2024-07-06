import { Tables } from "@/types/supabase";
import React from "react";

interface TripsListProps {
    trips: Tables<'trips'>[];
}

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
    const hasTrips = trips.length !== 0;
    console.log(trips.length)
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl p-3 text-sm">
                {hasTrips
                    ?
                    trips.map((trip) => (
                        <div className="justify-center items-center flex" key={trip.id}>
                            <h2>{trip.name}</h2>
                            <p>Date: {trip.date}</p>
                            <p>Drug: {trip.drug?.join(', ')}</p>
                            <p>People: {trip.people?.join(', ')}</p>
                        </div>
                    ))
                    :
                    <h1>no trips found</h1>
                }
            </div>
        </div>
    )
}

export default TripsList;