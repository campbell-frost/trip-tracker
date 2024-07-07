import { createClient } from '../../utils/supabase/server';
import { columns } from './Columns';
import { Trips } from './TripsList';
import { checkAuth } from '@/components/checkAuth';

async function Page() {
  await checkAuth();
  const supabase = await createClient();
  const { data: trips, error } = (await supabase
    .from('trips')
    .select()
    .order('id', { ascending: true }));
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

export default Page;