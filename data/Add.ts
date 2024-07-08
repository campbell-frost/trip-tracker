import { createClient } from "@/utils/supabase/server";

export async function AddDB() {
  const supabase = await createClient();
  
}
