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
import { CheckCircle2, X } from "lucide-react";

const initialStudents = [
  { rollNo: "01", name: "Raj Jigarnon" },
  { rollNo: "02", name: "Raj Jigarnon" },
  { rollNo: "03", name: "Raj Jigarnon" },
];

const AttendanceDialog = () => {
  const [open, setOpen] = useState(false);

  // State to track attendance status (true = present)
  const [attendanceMap, setAttendanceMap] = useState<Record<string, boolean>>(
    {}
  );
  // Active tab: "present" or "absent"
  const [activeTab, setActiveTab] = useState<"present" | "absent">("present");

  // Initialize attendanceMap on dialog open

  const toggleAttendance = (rollNo: string) => {
    setAttendanceMap((prev) => ({
      ...prev,
      [rollNo]: !prev[rollNo],
    }));
  };

  const handleSubmit = () => {
    const data = initialStudents.map(({ rollNo }) => ({
      rollNo,
      isPresent: attendanceMap[rollNo] || false,
    }));
    console.log("Submitted attendance:", data);
    setOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-green-400 font-semibold hover:bg-green-500 p-4 text-sm">
          Mark Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-bg p-0">
        <DialogHeader className="pt-6 pb-2 px-6">
          <DialogTitle className="flex gap-8 justify-start text-base font-bold">
            <button
              onClick={() => setActiveTab("absent")}
              className={`px-3 py-1 rounded border border-transparent cursor-pointer text-sm transition-colors ${
                activeTab === "absent"
                  ? "text-blue-600 underline"
                  : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
              }`}
            >
              Mark For Absent Numbers
            </button>
            <button
              onClick={() => setActiveTab("present")}
              className={`px-3 py-1 rounded border border-transparent cursor-pointer text-sm transition-colors ${
                activeTab === "present"
                  ? "text-blue-600 underline"
                  : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
              }`}
            >
              Mark For Present Numbers
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/5 text-left">Roll No</TableHead>
                <TableHead className="w-3/5 text-left">Name</TableHead>
                <TableHead className="w-1/5 text-center">Mark</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {initialStudents.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center p-4 text-muted-foreground"
                  >
                    No students to mark here.
                  </TableCell>
                </TableRow>
              )}
              {initialStudents.map(({ rollNo, name }) => (
                <TableRow
                  key={rollNo}
                  className="cursor-pointer hover:bg-blue-100"
                  onClick={() => toggleAttendance(rollNo)}
                >
                  <TableCell className="text-left">{rollNo}</TableCell>
                  <TableCell className="text-left">{name}</TableCell>
                  <TableCell className="text-center">
                    {attendanceMap[rollNo] === (activeTab === "present") ? (
                      <CheckCircle2
                        className="text-green-500 mx-auto"
                        size={22}
                      />
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter className="flex gap-4 justify-end px-6 pb-6">
          <Button
            variant="secondary"
            onClick={() => {
              // Implement modify logic if needed
            }}
          >
            Modify Attendance
          </Button>
          <Button variant="default" onClick={handleSubmit}>
            Submit Attendance
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AttendanceDialog;
