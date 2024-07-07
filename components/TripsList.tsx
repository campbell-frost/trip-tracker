'use client'
import { Tables } from "@/types/supabase";
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import Link from "next/link";
import { DeleteIcon, Edit } from "lucide-react";

interface TripsListProps {
  trips: Tables<'trips'>[];
}

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
  const hasTrips = trips.length !== 0;
  console.log(trips.length)

  const handleDelete = () => {

  }
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl p-3 text-sm">
        {hasTrips
          ?
          <Table>
            <TableCaption>List of trips</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Drugs</TableHead>
                <TableHead>People</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id} >
                  <TableCell>{trip.name}</TableCell>
                  <TableCell>{trip.date?.slice(0, -9)}</TableCell>
                  <TableCell>{trip.drug?.join(', ')}</TableCell>
                  <TableCell>{trip.people?.join(', ')}</TableCell>
                  <TableCell>
                    <Button variant={"outline"} size="icon">
                      <Link href={'trips/edit'}>
                        <Edit />
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell><Button size="icon" variant={"outline"} onClick={handleDelete}><DeleteIcon /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          :
          <h1>no trips found</h1>
        }
      </div>
    </div>
  )
}

export default TripsList;