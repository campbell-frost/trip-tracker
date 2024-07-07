'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Tables } from "@/types/supabase";
import ActionsCell from "./ActionsCell";

export const columns: ColumnDef<Tables<'trips'>>[] = [
  {
    accessorKey: "id",
    header: () => <div className="ml-2">Id</div>,
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      return <div className="ml-2">{id}</div>
    }
  },
  {
    accessorKey: "name",
    header: () => <>Name</>,
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <>{name}</>
    }
  },
  {
    accessorKey: "date",
    header: () => <>Date</>,
    cell: ({ row }) => {
      const date = row.getValue("date") as string
      const formatted = date.slice(0, -9);
      return <>{formatted}</>
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
      return <ActionsCell tripId={trip.id} />
    },
  },
]