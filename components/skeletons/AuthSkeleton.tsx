import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function AuthSkeleton() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Card>
        <CardHeader>
          <CardTitle><Skeleton className="h-6 w-24" /></CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-48" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
            <Skeleton className="h-4 w-12 mb-2" /> 
            <Skeleton className="h-10 w-full mb-6" /> 
            <Skeleton className="h-4 w-16 mb-2" /> 
            <Skeleton className="h-10 w-full mb-6" /> 
            <Skeleton className="h-10 w-full mb-2" /> 
          </div>
        </CardContent>
      </Card>
    </div>
  );
}