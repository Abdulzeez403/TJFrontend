"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface DropdownProps {
  label?: string;
  triggerLabel: React.ReactNode; // Label for the dropdown trigger button
  items: { label: string; onClick: () => void }[]; // Items to be rendered in the dropdown
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  triggerLabel,
  items,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
        {triggerLabel}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        <DropdownMenuSeparator />
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            className="cursor-pointer focus:bg-indigo-600 focus:text-white"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
