'use server';

import { createClient } from '@/utils/supabase/server';

interface deleteTripProps {
  id: string;
}

export async function deleteTrip(formData: deleteTripProps) {
  const supabase = await createClient();

  const { error } = await supabase.from('trips').delete().eq('id', formData.id);
  if (error) {
    throw new Error(`Error deleting data: ${error.message}`);
  }

  return { success: true };
}
