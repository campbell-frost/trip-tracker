'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { updateTrip } from '@/data/updateTrip';
import { addTrip } from '@/data/addTrip';
import { useState } from 'react';
import Back from '@/components/Back';

interface TripFormProps {
  id?: string;
  initialName: string;
  initialDate: string;
  initialDrug: string[];
  initialPeople: string[];
  create: boolean;
}

interface TripFormValues {
  name: string;
  date: string;
  drug: string;
  people: string;
}
export default function TripForm({
  id,
  initialName,
  initialDate,
  initialDrug,
  initialPeople,
  create,
}: TripFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<TripFormValues>({
    defaultValues: {
      name: initialName,
      date: initialDate,
      drug: initialDrug.join(', '),
      people: initialPeople.join(', '),
    },
  });

  const onSubmit = async (values: TripFormValues) => {
    try {
      setSuccessMessage(null);
      setSubmitError(null);
      if (create) {
        await add(values);
        setSuccessMessage('Trip successfully added!');
      } else {
        await update(values);
        setSuccessMessage('Trip successfully updated!');
      }
    } catch (error) {
      const action = create ? 'adding' : 'updating';
      if (error instanceof Error) {
        setSubmitError(`An error occurred while ${action} the trip: ${error.message}`);
      } else {
        setSubmitError(`An unknown error occurred while ${action} the trip`);
      }
    }
  };

  const update = async (values: TripFormValues) => {
    if (id) {
      await updateTrip({ ...values, id });
    } else {
      throw new Error('ID is required for updating a trip');
    }
  };

  const add = async (values: TripFormValues) => {
    await addTrip(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <Card>
          <CardContent className="grid grid-cols-2 gap-4 p-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder={initialName} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" placeholder={initialDate} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="drug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drugs</FormLabel>
                  <FormControl>
                    <Input placeholder={initialDrug.join(', ')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="people"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>People</FormLabel>
                  <FormControl>
                    <Input placeholder={initialPeople.join(', ')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardContent>
            <div className="flex justify-between">
              <div className="flex justify-start">
                <Back url="/trips" login={false} />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          {submitError ? (
            <div className="text-red-500">{submitError}</div>
          ) : (
            <div className="text-green-500">{successMessage}</div>
          )}
        </div>
      </form>
    </Form>
  );
}
