import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../components/tables/tableItem/column";
import Image from "next/image";
import DataTableRowActions from "./table/dataArrowActions";
import { IJournal } from "../../redux/Journal/type";

interface IProps {
  onEdit: (value: IJournal) => void;
  onDelete: (value: IJournal) => void;
  onView: (value: IJournal) => void;
}

export const columns = ({
  onEdit,
  onDelete,
  onView,
}: IProps): ColumnDef<IJournal, unknown>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: unknown) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => (
      <Image
        src={row?.original?.image}
        alt={row.original.symbol}
        width={50}
        height={50}
        className="object-cover"
      />
    ),
  },

  {
    accessorKey: "symbol",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Symbol" />
    ),
    cell: ({ row }) => row.original.symbol,
  },

  {
    accessorKey: "asset",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset" />
    ),
    cell: ({ row }) => row.original.asset,
  },

  // {
  //   accessorKey: "entryPrice",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Entry Price" />
  //   ),
  //   cell: ({ row }) => row.original.entryPrice,
  // },

  {
    accessorKey: "stoploss",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stop Loss" />
    ),
    cell: ({ row }) => row.original.stopLoss,
  },

  {
    accessorKey: "takeProfit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Take Profit" />
    ),
    cell: ({ row }) => row.original.takeProfit,
  },

  // {
  //   accessorKey: "exitPrice",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Exit Price" />
  //   ),
  //   cell: ({ row }) => row.original.exitPrice ?? "N/A",
  // },

  // {
  //   accessorKey: "notes",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Notes" />
  //   ),
  //   cell: ({ row }) => row.original.notes ?? "No notes",
  // },

  {
    accessorKey: "tradeDirection",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Direction" />
    ),
    cell: ({ row }) => row.original.tradeDirection,
  },

  {
    accessorKey: "pnl",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="P&L" />
    ),
    cell: ({ row }) => {
      const pnl = row.original.pnl;
      const textColor = pnl?.toString().startsWith("-")
        ? "text-red-600"
        : "text-green-600";

      return <span className={`${textColor} font-semibold`}>{pnl}</span>;
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      let bgColor;
      let textColor;

      switch (status) {
        case "win":
          bgColor = "bg-green-100";
          textColor = "text-green-700";
          break;
        case "loss":
          bgColor = "bg-red-100";
          textColor = "text-red-700";
          break;
        case "pending":
          bgColor = "bg-yellow-100";
          textColor = "text-yellow-700";
          break;
        default:
          bgColor = "bg-gray-100";
          textColor = "text-gray-700";
      }
      return (
        <div
          className={`flex items-center justify-center px-2 py-1 rounded-full ${bgColor}`}
        >
          <span className={`font-semibold ${textColor}`}>{status}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "Actions",
    id: "actions",
    cell: ({ row }: { row: Row<IJournal> }) => (
      <DataTableRowActions
        row={row}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    ),

    size: 50,
  },
];
