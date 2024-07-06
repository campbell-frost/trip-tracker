import { createClient } from '../../utils/supabase/server';
import TripsList from '../../components/TripsList';

export default async function Page() {
    const supabase = createClient();
    const { data: trips, error } = await supabase.from('trips').select();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (error) {
        console.error('error: ', error.message, error.details);
        return <div>Error : {error.message} </div>;
    }

    return (
        <>
            <h1>Hey, {user?.email}!</h1>
            <TripsList trips={trips} />
        </>
    );
}
