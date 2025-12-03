"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent } from "@/components/ui/card";
import { StudentDetails } from "@/backend/divisions";
import { getStudentInfo } from "./actions";

type StudentInfoDialogProps = {
  studentPRN: number;
};

export function StudentInfoDialog({ studentPRN }: StudentInfoDialogProps) {
  const [student, setStudent] = React.useState<StudentDetails | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const loadStudentData = async () => {
    if (student) return; // Don't reload if already loaded

    setLoading(true);
    try {
      const data = await getStudentInfo(studentPRN);
      setStudent(data);
    } catch (error) {
      console.error("Error loading student data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      loadStudentData();
    }
  };

  if (!student && !loading) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            variant="default"
            className="bg-green-400 hover:bg-green-500 text-white"
          >
            View Info
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-bg-dark">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Student Profile
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center h-40">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading student information...</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (loading) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            variant="default"
            className="bg-green-400 hover:bg-green-500 text-white"
          >
            View Info
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-bg-dark">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Student Profile
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center h-40">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading student information...</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!student) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            variant="default"
            className="bg-green-400 hover:bg-green-500 text-white"
          >
            View Info
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-bg-dark">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Student Profile
            </DialogTitle>
          </DialogHeader>
          <div className="text-center text-gray-400">
            <p>Student information not found.</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const fullName = [student.firstName, student.lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="default"
          className="bg-green-400 hover:bg-green-500 text-white"
        >
          View Info
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-bg-dark">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Student Profile
          </DialogTitle>
        </DialogHeader>

        <Card className="bg-bg-dark border-none">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex flex-col items-start gap-10 md:flex-row text-sm md:text-lg flex-1">
                <div className="flex flex-col items-start gap-4 text-sm">
                  <p className="font-semibold text-xl">
                    {fullName || "Name not provided"}
                  </p>
                  <p>
                    ID: <span className="font-medium">{student.id}</span>
                  </p>
                  <p>Gender: {student.gender || "N/A"}</p>
                  <p>Class: {student.class || "N/A"}</p>
                  <p>Roll No: {student.rollNo || "N/A"}</p>
                  <p>
                    Semester:{" "}
                    <Badge variant="outline">{student.semester || "N/A"}</Badge>
                  </p>
                  <p>Father Name: {student.fatherName || "N/A"}</p>
                  <p>Mother Name: {student.motherName || "N/A"}</p>

                  <p>
                    Category:{" "}
                    <Badge variant="secondary">
                      {student.category || "N/A"}
                    </Badge>
                  </p>
                  <p>
                    Department ID:{" "}
                    <span className="font-medium">
                      {student.dep_id || "N/A"}
                    </span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="text-blue-400">
                      {student.email || "N/A"}
                    </span>
                  </p>
                  <p>Contact: {student.contactNo || "N/A"}</p>
                  <p>Date of Birth: {student.dateOfBirth || "N/A"}</p>
                  <p>HSC Score: {student.HSC_score || "N/A"}</p>
                  <p>CET Score: {student.CET_Score || "N/A"}</p>
                </div>

                <div className="flex flex-col items-start gap-4 text-sm">
                  <p>State: {student.state || "N/A"}</p>
                  <p>City: {student.city || "N/A"}</p>
                  <p>PIN: {student.pin || "N/A"}</p>
                  <p>Address: {student.address || "N/A"}</p>
                  <p>Aadhaar: {student.aadhar || "N/A"}</p>
                  <p>PAN: {student.pan || "N/A"}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
