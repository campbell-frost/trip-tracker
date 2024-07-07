'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Tables } from "@/types/supabase";
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

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

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => console.log('kiss', trip.id)}>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]