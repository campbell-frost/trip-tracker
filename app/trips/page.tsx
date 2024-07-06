// app/page.tsx
import { createClient } from '../../utils/supabase/server';
import TripsList from '../../components/TripsList';

export default async function Page() {
  const supabase = createClient();
  const { data: trips, error } = await supabase.from('trips').select('*');

  if (error) {
    console.error('Error fetching trips:', error);
    return <div>Error loading trips</div>;
  }

  return (
    <>
      <TripsList trips={trips} />
    </>
  );
}
