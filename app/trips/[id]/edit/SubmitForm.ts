'use server'

import { createClient } from "@/utils/supabase/server"

interface SubmitFormProps {
  name: string,
  date: string,
  drug: string,
  people: string,
  id: number
}

export async function submitForm(formData: SubmitFormProps) {
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