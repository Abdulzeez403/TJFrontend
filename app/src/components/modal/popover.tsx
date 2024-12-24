"use client";
import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

interface PopoverProps {
  trigger: React.ReactNode; // The button or element that triggers the popover
  children: React.ReactNode; // The content inside the popover
  side?: "top" | "right" | "bottom" | "left"; // Position of the popover
  align?: "start" | "center" | "end"; // Alignment of the popover
  sideOffset?: number; // Distance from the trigger
}

const PopoverModal: React.FC<PopoverProps> = ({
  trigger,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 8,
}) => {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        side={side}
        align={align}
        sideOffset={sideOffset}
        className="bg-white rounded-md shadow-lg p-4 w-96 border border-gray-200"
      >
        {children}
        <PopoverPrimitive.Close
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </PopoverPrimitive.Close>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export default PopoverModal;
