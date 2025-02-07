import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import Link from "next/link";
import { IJournal } from "@/app/src/redux/Journal/type";

interface DataTableRowActionsProps<TData extends IJournal> {
  row: Row<TData>;
  onEdit: (value: TData) => void;
  onDelete: (value: TData) => void;
  onView: (value: TData) => void;
}

const DataTableRowActions = <TData extends IJournal>({
  row,
  onEdit,
  onDelete,
  onView,
}: DataTableRowActionsProps<TData>) => {
  // Handle row deletion with error handling and logging
  // const handleDelete = async () => {
  //   try {
  //     await onDelete(row.original); // Wait for deletion to complete
  //     console.log(`Deleted journal with ID: ${row.original._id}`); // Log successful deletion
  //   } catch (error) {
  //     console.error("Error deleting journal:", error); // Log error if deletion fails
  //   }
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          aria-label="Open actions menu"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onView(row.original)}>
          <Link href={`/view/${row.original._id}`} passHref>
            View
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onEdit(row.original)}>
          Edit
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => onDelete(row?.original)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
