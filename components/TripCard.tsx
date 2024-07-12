'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Tables } from '@/types/supabase';
import { DeleteIcon, Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Alert } from './Alert';
import { useState } from 'react';

interface TripCardProps {
  trip: Tables<'trips'>;
  tripId: string;
  tripName: string;
}

export function TripCard({ trip, tripId, tripName }: TripCardProps) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const router = useRouter();
  
  const handleDelete = () => {
    setIsAlertOpen(true);
  };

  const handleEdit = () => {
    router.push(`/trips/${tripId}/edit`);
  };

  return (
    <>
      <Card className="bg-card/50 dark:bg-card/80 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardTitle className="p-4 flex justify-between items-center text-card-foreground border-b border-border">
          <span className="text-2xl font-semibold">{trip.name}</span>
          <div className="flex space-x-2">
            <Button variant={'outline'} size="icon" onClick={handleEdit}>
              <Edit />
            </Button>
            <Button variant={'outline'} size="icon" onClick={handleDelete}>
              <DeleteIcon />
            </Button>
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
      <Alert
        tripId={tripId}
        tripName={tripName}
        isOpen={isAlertOpen}
        onOpenChange={setIsAlertOpen}
      />
    </>
  );
}
