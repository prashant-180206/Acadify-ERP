// File: components/AttendanceDialogClient.tsx
"use client";
import React, { useState } from "react";
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
import { CheckCircle2 } from "lucide-react";
import { submitAttendance } from "./actions";

export type SimpleStudent = {
  PRN: number;
  Name: string;
  Roll_No: number;
};

interface AttendanceDialogClientProps {
  students?: SimpleStudent[];
  courseId: number;
  instructorId: number;
  courseName: string;
  className: string;
  date: string;
  timeslot?: string;
}

const AttendanceDialogClient = ({
  students = [],
  courseId,
  instructorId,
  courseName,
  className,
  date,
  timeslot,
}: AttendanceDialogClientProps) => {
  const [open, setOpen] = useState(false);
  const [attendanceMap, setAttendanceMap] = useState<Record<string, boolean>>(
    {}
  );
  const [activeTab, setActiveTab] = useState<"present" | "absent">("present");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAttendance = (Roll_No: number) => {
    setAttendanceMap((prev) => ({ ...prev, [Roll_No]: !prev[Roll_No] }));
  };

  const handleSubmit = async () => {
    if (!courseId || !instructorId) {
      alert("Missing course or instructor information");
      return;
    }

    setIsSubmitting(true);
    try {
      // Get only present students' roll numbers
      const presentRolls = students
        .filter(({ Roll_No }) => attendanceMap[Roll_No] === true)
        .map(({ Roll_No }) => Roll_No);

      const result = await submitAttendance(
        courseId,
        instructorId,
        date,
        presentRolls
      );

      if (result.success) {
        alert("Attendance submitted successfully!");
        setOpen(false);
        // Reset form
        setAttendanceMap({});
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting attendance:", error);
      alert("Failed to submit attendance. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-green-400 font-semibold hover:bg-green-500 p-4 text-sm">
          Mark Attendance
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-bg p-0 h-[60vh] overflow-auto no-scrollbar">
        <DialogHeader className="pt-6 pb-2 px-6">
          <DialogTitle className="text-lg font-bold mb-2">
            Mark Attendance - {courseName}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mb-4">
            {className} | {timeslot} | {date}
          </p>
          <div className="flex gap-8 justify-start text-base font-bold">
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
          </div>
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
              {students.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center p-4 text-muted-foreground"
                  >
                    No students to mark here.
                  </TableCell>
                </TableRow>
              )}

              {students.map(({ Roll_No, Name }) => (
                <TableRow
                  key={Roll_No}
                  className="cursor-pointer hover:bg-blue-100"
                  onClick={() => toggleAttendance(Roll_No)}
                >
                  <TableCell className="text-left">{Roll_No}</TableCell>
                  <TableCell className="text-left">{Name}</TableCell>
                  <TableCell className="text-center">
                    {attendanceMap[Roll_No] === (activeTab === "present") ? (
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
            onClick={() => setAttendanceMap({})}
            disabled={isSubmitting}
          >
            Clear
          </Button>
          <Button
            variant="default"
            onClick={handleSubmit}
            disabled={isSubmitting || courseId === 0}
          >
            {isSubmitting ? "Submitting..." : "Submit Attendance"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AttendanceDialogClient;
