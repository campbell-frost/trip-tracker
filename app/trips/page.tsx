import { createClient } from '../../utils/supabase/server';
import TripsList from '../../components/TripsList';

export default async function Page() {
    const supabase = createClient();
    const { data: trips, error } = await supabase.from('trips').select('*');

    if (error) {
        console.error('hi:', error);
        return <div>Error :() </div>;
    }

    return (
        <>
            <h1>hi you have logged in loser</h1>
            <TripsList trips={trips} />
        </>
    );
}
