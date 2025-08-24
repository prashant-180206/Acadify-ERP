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
import { Check, X } from "lucide-react";

const AttendanceDialog: React.FC<{ courseid: string }> = ({ courseid }) => {
  const attendancedata: { date: string; marked: boolean }[] = [
    { date: "2025-08-18", marked: true },
    { date: "2025-08-19", marked: false },
    { date: "2025-08-20", marked: true },
    { date: "2025-08-21", marked: true },
    { date: "2025-08-22", marked: false },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-green-400 font-semibold hover:bg-green-500 p-4 text-sm">
          View Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-bg p-10">
        <DialogTitle>Attendance for {courseid}</DialogTitle>
        <div className="">
          <Table>
            <TableBody>
              {attendancedata.length === 0 && (
                <TableRow className="f-row justify-between w-full">
                  <TableCell
                    colSpan={1}
                    className="text-center p-4 text-muted-foreground"
                  >
                    No students to mark here.
                  </TableCell>
                </TableRow>
              )}
              {attendancedata.map(({ date, marked }) => (
                <TableRow
                  key={date}
                  className="cursor-pointer hover:bg-blue-100"
                >
                  <TableCell className="text-left">{date}</TableCell>
                  <TableCell className="text-center pr-10">
                    {marked ? (
                      <Check
                        className="bg-green-300 rounded-full p-1 "
                        size={30}
                      />
                    ) : (
                      <X className="bg-red-400 rounded-full p-1 " size={30} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AttendanceDialog;
