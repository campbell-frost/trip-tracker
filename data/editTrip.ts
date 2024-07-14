'use server';

import { createClient } from '@/utils/supabase/server';

interface editTripProps {
    name: string;
    date: string;
    drug: string;
    people: string;
    id: string; 
}

export async function editTrip(trip: editTripProps) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('trips')
    .update({
      name:trip.name,
      date: trip.date,
      drug: trip.drug.split(',').map((item) => item.trim()),
      people: trip.people.split(',').map((item) => item.trim()),
    })
    .eq('id', trip.id);

  if (error) {
    throw new Error(`Error uploading data: ${error.message}`);
  }

  return { success: true };
}
