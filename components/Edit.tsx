import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { editTrip } from '@/data/editTrip';
import TripForm from './TripForm';

interface EditProps {
  trip: {
    name: string;
    date: string;
    drug: string[];
    people: string[];
    id: string;
  };
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

interface TripFormData {
  name: string;
  date: string;
  drug: string | string[];
  people: string | string[];
}


export function Edit({ trip, isOpen, onOpenChange }: EditProps) {
  const handleEdit = async (formData: TripFormData) => {
    try {
      await editTrip({
        id: trip.id,
        name: formData.name,
        date: formData.date,
        drug: Array.isArray(formData.drug) ? formData.drug.join(', ') : formData.drug,
        people: Array.isArray(formData.people) ? formData.people.join(', ') : formData.people,
      });
      onOpenChange(false);
    } catch (error) {
      console.error('Error editing trip:', error);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Editing {trip.name}</AlertDialogTitle>
        </AlertDialogHeader>
        <TripForm
          initialName={trip.name}
          initialDate={trip.date}
          initialDrug={trip.drug}
          initialPeople={trip.people}
          create={false}
          onSubmit={handleEdit}
          onCancel={handleCancel}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}