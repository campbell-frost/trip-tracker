import { createClient } from '../../utils/supabase/server';
import { columns } from './Columns';
import { Trips } from './TripsList';

export default async function Page() {
  const supabase = createClient();
  const { data: trips, error } = await supabase.from('trips').select();

  if (error) {
    console.error('error: ', error.message, error.details);
    return <div>Error : {error.message} </div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Trips columns={columns} data={trips} />
    </div>
  );
}
