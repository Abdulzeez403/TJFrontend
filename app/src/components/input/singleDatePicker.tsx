"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SingleDatePickerProps {
  label: string;
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export const SingleDatePicker: React.FC<SingleDatePickerProps> = ({
  label,
  selectedDate,
  onDateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none text-left",
              selectedDate ? "text-black" : "text-gray-500",
              "focus:ring-2 focus:ring-blue-500"
            )}
          >
            {selectedDate
              ? format(selectedDate, "MMMM dd, yyyy")
              : "Select a date"}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onDateChange(date);
              setIsOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
