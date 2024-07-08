'use server'

import { createClient } from "@/utils/supabase/server";

interface deleteFromDBProps {
  id: string;
}

export async function deleteFromDB(formData: deleteFromDBProps) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('trips')
    .delete()
    .eq('id', formData.id)
  if (error) {
    throw new Error(`Error deleting data: ${error.message}`);
  }

  return { success: true };

}
