import TripForm from "../TripForm";
import Back from "@/components/Back";
export default async function Page() {

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl mt-8">
        <TripForm
          create={true}
          initialName={''}
          initialDate={''}
          initialDrug={[]}
          initialPeople={[]}
        />
      </div>
    </div>
  )
}