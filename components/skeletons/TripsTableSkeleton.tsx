import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export default function TripsTableSkeleton() {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl p-3 text-sm">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TableHead key={i}>
                      <Skeleton className="h-4 w-24" />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                  <TableRow key={row}>
                    {[1, 2, 3, 4].map((cell) => (
                      <TableCell key={cell}>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    ))}
                    <TableCell className='flex justify-center my-2'>
                      <Skeleton className="h-4 w-8" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <hr />
            <div className="my-1 mx-3 flex justify-between items-center">
              <Skeleton className="h-8 w-24" />
              <div className="flex space-x-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}