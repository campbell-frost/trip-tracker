import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { deleteTrip } from "@/data/deleteTrip";
import getTrips from "@/data/getTrips"
import { createClient } from "@/utils/supabase/server";
import { DeleteIcon, Edit } from "lucide-react";
import React from "react"

export default async function DashBoard() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  const trips = await getTrips();

  return (
    <div className="w-full min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">Hi Legend {user.user?.email}</h1>
        <div className="grid gap-6">
          {trips.map((trip) => (
            <Card
              key={trip.id}
              className="bg-card/50 dark:bg-card/80 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardTitle className="p-4 flex justify-between items-center text-card-foreground border-b border-border">
                <span className="text-2xl font-semibold">{trip.name}</span>
                <div className="flex space-x-2">
                  <Button variant={'outline'} size="icon"><Edit/></Button>
                  <Button variant={'outline'} size="icon"><DeleteIcon/></Button>
                </div>
              </CardTitle>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Date</p>
                    <p className="text-lg text-card-foreground">{trip.date || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">People</p>
                    <p className="text-lg text-card-foreground">{trip.people?.join(', ') || 'None'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Substances</p>
                    <p className="text-lg text-card-foreground">{trip.drug?.join(', ') || 'None'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}