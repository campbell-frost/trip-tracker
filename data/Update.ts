'use server'

import { createClient } from "@/utils/supabase/server"

interface UpdateDBProps{
  name: string,
  date: string,
  drug: string,
  people: string,
  id: number
}

export async function UpdateDB(formData: UpdateDBProps) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('trips')
    .update({
      name: formData.name,
      date: formData.date,
      drug: formData.drug.split(',').map(item => item.trim()),
      people: formData.people.split(',').map(item => item.trim())
    })
    .eq('id', formData.id)

  if (error) {
    throw new Error(`Error uploading data: ${error.message}`);
  }

  return { success: true };
}