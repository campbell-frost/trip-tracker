import Back from "@/components/Back";
import { createClient } from "@/utils/supabase/server";
import TripForm from "./TripForm";

interface EditProps {
  params: { id: number };
}

export default async function Edit({ params }: EditProps) {
  const supabase = await createClient();
  const { data: trip, error } = await supabase.from("trips").select('*').eq('id', params.id).single();

  if (error) {
    return <div>Error loading trip data</div>;
  }
  if (!trip) {
    return <div>No trip found</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl p-3 text-sm">
        <Back url="/trips" login={false} />
      </div>
      <div className="w-full max-w-2xl mt-8">
        <TripForm
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