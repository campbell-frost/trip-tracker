'use server'

import { createClient } from "@/utils/supabase/server";

interface addToDBProps {
  name: string,
  date: string,
  drug: string,
  people: string,
}

export async function addToDB(formData: addToDBProps) {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  const { error } = await supabase
    .from('trips')
    .insert({
      name: formData.name,
      date: formData.date,
      drug: formData.drug.split(',').map(item => item.trim()),
      people: formData.people.split(',').map(item => item.trim()),
      user_id: user.user?.id 
    })
  if (error) {
    throw new Error(`Error adding data: ${error.message}`);
  }

  return { success: true };

}