import { Tables } from "@/types/supabase";
import React from "react";

interface TripsListProps {
    trips: Tables<'trips'>[];
}

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
    return (
        <div className="container">
            {trips.map((trip) => (
                <div key={trip.id}>
                    <h2>{trip.name}</h2>
                    <p>Date: {trip.date}</p>
                    <p>Drug: {trip.drug?.join(', ')}</p>
                    <p>People: {trip.people?.join(', ')}</p>
                </div>
            ))}
        </div>
    )
}

export default TripsList;