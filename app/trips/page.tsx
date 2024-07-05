import { createClient } from "@/utils/supabase/client";

export default async function Page(){
    const supabase = createClient();
    const {data: trips} = await supabase.from('trips').select();

    return<pre>{JSON.stringify(trips, null, 2)}</pre>
}