"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CloudUpload } from "lucide-react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { StatusFilter } from "@/app/src/components/tables/tableItem/statusFilter";
import { DataTableViewOptions } from "@/app/src/components/tables/tableItem/filter";
import { DataTablePagination } from "@/app/src/components/tables/tableItem/pagination";
import { ResponsiveDrawerDialog } from "@/app/src/components/modal/modal";
import { IJournal } from "@/app/src/redux/Journal/type";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onEdit: (value: IJournal) => void;
  onDelete: (value: IJournal) => void;
  onDismiss: () => void;
  onView: (value: IJournal) => void;
  onOpen: () => void;
  open: boolean;
  children: React.ReactNode;
  title: unknown;
  description: string;
}

export function TableComponent<TData, TValue>({
  columns,
  data,
  open,
  onDismiss,
  onOpen,
  children,
  title,
  description,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const statusOptions = ["All", "Active", "Inactive", "Pending"];
  const selectedStatus =
    (table.getColumn("status")?.getFilterValue() as string) ?? "All";

  const handleFilterChange = (status: string) => {
    table
      .getColumn("status")
      ?.setFilterValue(status === "All" ? undefined : status);
  };

  return (
    <div className="border-2 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center py-4">
            {/* Uncomment and use Input if needed */}
            {/* <Input
              placeholder="Search name"
              value={table.getColumn("name")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            /> */}
          </div>
          <StatusFilter
            options={statusOptions}
            selectedStatus={selectedStatus}
            onStatusChange={handleFilterChange}
          />
        </div>

        <div className="flex items-center">
          <div>
            <DataTableViewOptions table={table} />
          </div>

          <Button className="ml-4" onClick={onOpen}>
            <h4 className="pr-2">New Journal</h4>
            <CloudUpload className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Table className="border-2 rounded-lg border-customPrimary">
        <TableHeader className="bg-slate-300">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-black font-bold p-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border-2 border-customPrimary">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DataTablePagination table={table} />

      <ResponsiveDrawerDialog
        title=""
        description={description}
        isOpen={open}
        onClose={onDismiss}
        dialogClassName="w-full"
      >
        <div>{children}</div>
      </ResponsiveDrawerDialog>
    </div>
  );
}
