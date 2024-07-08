'use client';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { updateDB } from "@/data/Update";
import { addToDB} from "@/data/Add";
import { useState } from "react";

interface TripFormProps {
  id?: string;
  initialName: string;
  initialDate: string;
  initialDrug: string[];
  initialPeople: string[];
  create: boolean;
}

export default function TripForm({ id, initialName, initialDate, initialDrug, initialPeople, create }: TripFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm({
    defaultValues: {
      name: initialName,
      date: initialDate,
      drug: initialDrug.join(', '),
      people: initialPeople.join(', '),
    }
  });

  const onSubmit = async (values: any) => {
    try {
      setSuccessMessage(null);
      setSubmitError(null);
      if (create) {
        await add(values);
        setSuccessMessage('Trip successfuly added!')
      } else {
        await update(values);
        setSuccessMessage('Trip successfuly updated!')
      }
    }
    catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unknown error occurred');
      }
    }
  };

  const update = async (values: any) => {
    await updateDB({ ...values, id });
  }

  const add = async (values: any) => {
    await addToDB({...values});
  }

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
                    <Input
                      placeholder={initialName}
                      {...field}
                    />
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
                    <Input
                      {...field}
                      type="date"
                      placeholder={initialDate}
                    />
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
                    <Input
                      placeholder={initialDrug.join(', ')}
                      {...field}
                    />
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
                    <Input
                      placeholder={initialPeople.join(', ')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
        <div className="flex justify-center">

          {submitError
            ? <div className="text-red-500">{submitError}</div>
            : <div className="text-green-500">{successMessage}</div>
          }
        </div>
      </form>
    </Form>
  );
}