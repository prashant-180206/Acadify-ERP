"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AttendanceEntry {
  rollNo: string;
  isPresent: boolean;
}

const ModifyAttendanceDialog = () => {
  const [open, setOpen] = useState(false);
  const [attendanceList, setAttendanceList] = useState<AttendanceEntry[]>([]);

  // Handle updating rollNo or isPresent in list
  const updateEntry = (
    index: number,
    field: keyof AttendanceEntry,
    value: string | boolean
  ) => {
    const updatedList = [...attendanceList];
    updatedList[index] = {
      ...updatedList[index],
      [field]: value,
    };
    setAttendanceList(updatedList);
  };

  // Add new empty entry
  const addEntry = () => {
    setAttendanceList((prev) => [...prev, { rollNo: "", isPresent: false }]);
  };

  // Save changes
  const handleSave = () => {
    // Optional: Validation could go here (e.g., no empty rollNos)

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-blue-500 font-semibold hover:bg-blue-600 p-4 text-sm">
          Modify Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-bg p-0 max-w-md">
        <DialogHeader className="pt-6 pb-2 px-6">
          <DialogTitle className="text-base font-bold">
            Modify Attendance
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-2 max-h-96 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-3/5 text-left">Roll No</TableHead>
                <TableHead className="w-2/5 text-center">Present</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceList.map(({ rollNo, isPresent }, i) => (
                <TableRow key={i}>
                  <TableCell className="text-left p-0">
                    <input
                      type="text"
                      value={rollNo}
                      onChange={(e) => updateEntry(i, "rollNo", e.target.value)}
                      className="w-full border-none px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                      placeholder="Enter Roll No"
                    />
                  </TableCell>
                  <TableCell className="text-center p-0">
                    <input
                      type="checkbox"
                      checked={isPresent}
                      onChange={(e) =>
                        updateEntry(i, "isPresent", e.target.checked)
                      }
                      className="cursor-pointer"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm" onClick={addEntry}>
              + Add Entry
            </Button>
          </div>
        </div>
        <DialogFooter className="flex gap-4 justify-end px-6 pb-6">
          <Button variant="default" onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModifyAttendanceDialog;
