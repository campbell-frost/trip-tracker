'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Tables } from "@/types/supabase";
import ActionsCell from "./ActionsCell";

export const columns: ColumnDef<Tables<'trips'>>[] = [
  {
    accessorKey: "name",
    header: () => <div className="ml-2">Name</div>,
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <div className="ml-2">{name}</div>
    }
  },
  {
    accessorKey: "date",
    header: () => <>Date</>,
    cell: ({ row }) => {
      const date = row.getValue("date") as string
      return <>{date}</>
    },
  },
  {
    accessorKey: "drug",
    header: () => <>Drug</>,
    cell: ({ row }) => {
      const drug = row.getValue("drug") as string[];
      const formatted = drug.join(', ');
      return <>{formatted}</>
    }
  },
  {
    accessorKey: "people",
    header: () => <>People</>,
    cell: ({ row }) => {
      const drug = row.getValue("people") as string[];
      const formatted = drug.join(', ');
      return <>{formatted}</>
    }
  },
  {
    id: "actions",
    header: () => <>Actions</>,
    cell: ({ row }) => {
      const trip = row.original
      return <ActionsCell tripName={trip.name!} tripId={trip.id} />
    },
  },
]