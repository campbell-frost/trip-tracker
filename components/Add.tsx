import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { addTrip } from '@/data/addTrip';
import TripForm from './TripForm';

interface AddProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

interface TripFormData {
  name: string;
  date: string;
  drug: string | string[];
  people: string | string[];
}

export function Add({ isOpen, onOpenChange }: AddProps) {
  const handleAdd = async (formData: TripFormData) => {
    try {
      await addTrip({
        name: formData.name,
        date: formData.date,
        drug: Array.isArray(formData.drug) ? formData.drug.join(', ') : formData.drug,
        people: Array.isArray(formData.people) ? formData.people.join(', ') : formData.people,
      });
      onOpenChange(false);
    } catch (error) {
      console.error('Error adding trip:', error);
    }
  };

  const handleCancel = () => {
    console.log('handleCancel');
    onOpenChange(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add trip</AlertDialogTitle>
        </AlertDialogHeader>
        <TripForm
          initialName=""
          initialDate=""
          initialDrug={[]}
          initialPeople={[]}
          create={true}
          onSubmit={handleAdd}
          onCancel={handleCancel}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}