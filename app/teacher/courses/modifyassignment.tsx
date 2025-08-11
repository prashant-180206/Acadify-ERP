"use client";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { assignments, DB_Assignment } from "./data";

interface ModifyAssignmentPopoverProps {
  assignmentId: number;
}

const ModifyAssignmentPopover: React.FC<ModifyAssignmentPopoverProps> = ({
  assignmentId,
}) => {
  const assignment = assignments.find((a) => a.assignment_id === assignmentId);

  // local form state
  const [name, setName] = useState<string>(assignment?.name || "");
  const [dueDate, setDueDate] = useState<string>(assignment?.dueDate || "");
  const [open, setOpen] = useState(false);

  if (!assignment) return null;

  const handleSave = () => {
    setOpen(false); // close popover
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="bg-blue-400 hover:bg-blue-500 rounded-full">
          Modify Assignment
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 space-y-4 bg-bg">
        <div className="space-y-2">
          <Label htmlFor="name">Assignment Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-bg-main rounded-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="rounded-full bg-bg-main "
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="rounded-full bg-green-400 hover:bg-green-500 "
          >
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ModifyAssignmentPopover;
