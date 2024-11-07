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
import { useState } from 'react';

interface TripFormValues {
  name: string;
  date: string;
  substances: string;
  people: string;
}

interface TripFormProps {
  initialName?: string;
  initialDate?: string;
  initialSubstances?: string[];
  initialPeople?: string[];
  create: boolean;
  onSubmit: (values: TripFormValues) => Promise<void>;
  onCancel: () => void;
}

export default function TripForm({
    initialName,
    initialDate,
    initialSubstances,
    initialPeople,
    create,
    onSubmit,
    onCancel,
  }: TripFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const form = useForm<TripFormValues>({
    defaultValues: {
      name: initialName || '',
      date: initialDate || '',
      substances: initialSubstances ? initialSubstances.join(', ') : '',
      people: initialPeople ? initialPeople.join(', ') : '',
    },
  });

  const handleSubmit = async (values: TripFormValues) => {
    try {
      setSuccessMessage(null);
      setSubmitError(null);
      await onSubmit(values);
      setSuccessMessage(create ? 'Trip successfully added!' : 'Trip successfully updated!');
    } catch (error) {
      const action = create ? 'adding' : 'updating';
      if (error instanceof Error) {
        setSubmitError(`An error occurred while ${action} the trip: ${error.message}, ${error.cause} ${error.name} ${error.stack}`);
      } else {
        setSubmitError(`An unknown error occurred while ${action} the trip`);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 w-full">
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
              name="substances"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Substances</FormLabel>
                  <FormControl>
                    <Input placeholder={initialSubstances?.join(', ')} {...field} />
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
                    <Input placeholder={initialPeople?.join(', ')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <div className="flex justify-start">
                <Button type="button" variant='outline' onClick={onCancel}>Cancel</Button>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </div>

            <div className="flex justify-center">
              {submitError ? (
                <div className="text-red-500">{submitError}</div>
              ) : (
                <div className="text-green-500">{successMessage}</div>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
