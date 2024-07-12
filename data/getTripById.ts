'use server';

import { createClient } from '@/utils/supabase/server';

interface getTripsByIdProps {
  params: { id: string };
}

export default async function getTripById({ params }: getTripsByIdProps) {
  const supabase = await createClient();
  const { data: trip, error } = await supabase
    .from('trips')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error) {
    throw new Error(`An error occured retreiving data ${error.message}`);
  }
  if (!trip) {
    throw new Error(`No trip found for ${params.id}`);
  }

  return trip;
}
