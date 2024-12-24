"use client";

import React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface DoubleDatePickerProps {
  label: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  onDateChange: (dates: {
    startDate: Date | undefined;
    endDate: Date | undefined;
  }) => void;
}

export const DoubleDatePicker: React.FC<DoubleDatePickerProps> = ({
  label,
  startDate,
  endDate,
  onDateChange,
}) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startDate || new Date(),
    to: endDate || addDays(new Date(), 7),
  });

  React.useEffect(() => {
    onDateChange({ startDate: date?.from, endDate: date?.to });
  }, [date, onDateChange]);

  return (
    <div className="">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "MMMM dd, yyyy")} -{" "}
                  {format(date.to, "MMMM dd, yyyy")}
                </>
              ) : (
                format(date.from, "MMMM dd, yyyy")
              )
            ) : (
              <span>Select a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
