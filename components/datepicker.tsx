"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  value?: string; // YYYY-MM-DD or any string format you want
  onChange: (value: string) => void;
  label?: string;
};

export function DatePicker({
  value,
  onChange,
  label = "Select date",
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const selectedDate = value ? new Date(value) : undefined;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const formattedDate =
    mounted && selectedDate ? selectedDate.toLocaleDateString() : "Select date";

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1 text-main-dark">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full text-start bg-bg-main hover:bg-bg-main text-main-dark p-5 rounded-full"
          >
            {formattedDate}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            captionLayout="dropdown"
            onSelect={(date) => {
              if (date) {
                onChange(date.toISOString().split("T")[0]); // returns YYYY-MM-DD
              } else {
                onChange("");
              }
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
