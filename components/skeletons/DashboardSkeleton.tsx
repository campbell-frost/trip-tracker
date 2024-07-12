import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react"

export default function DashboardSkeleton() {
  return (
    <div className="w-full min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="bg-card/50 dark:bg-card/80 shadow-lg">
              <CardTitle className="p-4 flex justify-between items-center border-b border-border">
                <Skeleton className="h-8 w-1/3" />
                <div className="flex space-x-2">
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <Skeleton className="h-10 w-10 rounded-md" />
                </div>
              </CardTitle>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j}>
                      <Skeleton className="h-4 w-20 mb-2" />
                      <Skeleton className="h-6 w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}