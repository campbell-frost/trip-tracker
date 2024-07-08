import Back from "@/components/Back";
import { createClient } from "@/utils/supabase/server";
import TripForm from "../../TripForm";
import { checkAuth } from "@/data/checkAuth";

interface EditProps {
  params: { id: string };
}

export default async function Edit({ params }: EditProps) {
  checkAuth();
  const supabase = await createClient();
  const { data: trip, error } = await supabase.from("trips").select('*').eq('id', params.id).single();

  if (error) {
    return <div className="flex justify-center items-center min-h-100">Error loading trip data: {error.message}</div>;
  }
  if (!trip) {
    return <div>No trip found</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl mt-8">
        <TripForm
          create={false}
          id={trip.id}
          initialName={trip.name || ''}
          initialDate={trip.date || ''}
          initialDrug={trip.drug || []}
          initialPeople={trip.people || []}
        />
      </div>
    </div>
  );
}