import { createClient } from "@/utils/supabase/server";

export default async function getTrips(){

    const supabase = await createClient();
    const { data: trips, error } = await supabase
    .from('trips')
    .select('*')
    .order('date', { ascending: true });
    
    if (error) {
        throw new Error(`An error occured retreiving data ${error.message}`)
    }
    return trips;
}
