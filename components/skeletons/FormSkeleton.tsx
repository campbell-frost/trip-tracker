import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function FormSkeleton() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl mt-8">
        <div className="space-y-4 w-full">
          <Card>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2 w-full">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-10 w-52" />
                </div>
              ))}
            </CardContent>
            <CardContent>
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <Skeleton className="h-10 w-24" />
                </div>
                <div className="flex justify-end">
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}