import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarCheck,
  FilePen,
  Clock,
  FileText,
  Check,
  Laptop2,
  GraduationCap,
  BadgeDollarSign,
  FilePenLine,
  CheckCheck,
  BookOpenCheck,
  Building,
  ClipboardCheck,
  CalendarClock,
  Users,
  Book,
  UserRound,
} from "lucide-react";
import React from "react";

const root = () => {
  const studentFeatures = [
    { label: "Monitor Attendance", icon: CalendarCheck },
    { label: "Upload Assignments", icon: FilePen },
    { label: "Simplify Time Table", icon: Clock },
    { label: "Track Exams", icon: FileText },
    { label: "Track Marks", icon: Check },
    { label: "Track Courses", icon: Laptop2 },
    { label: "Get Study Material", icon: GraduationCap },
    { label: "Fee Status Checker", icon: BadgeDollarSign },
  ];
  const universityFeatures = [
    { label: "Manage Divisions", icon: CalendarCheck },
    { label: "Keep Student Records", icon: FileText }, // Changed for record-keeping
    { label: "Track Attendance", icon: Clock },
    { label: "Manage Exams", icon: FilePenLine }, // Pen on paper icon
    { label: "Evaluation of Students", icon: CheckCheck }, // More evaluation-like
    { label: "Manage Courses", icon: GraduationCap },
    { label: "Manage Studies", icon: BookOpenCheck }, // Book-based icon
    { label: "Manage Student Fees", icon: BadgeDollarSign },
  ];
  const teacherFeatures = [
    { label: "Manage Divisions", icon: Building },
    { label: "Track Attendance", icon: ClipboardCheck },
    { label: "Timetable", icon: CalendarClock },
    { label: "Evaluation of Students", icon: CheckCheck },
    { label: "Manage Staff", icon: Users },
    { label: "Subjects", icon: Book },
    { label: "Student Details", icon: UserRound },
    { label: "Manage Student Fees", icon: BadgeDollarSign },
  ];
  return (
    <main className="bg-bg">
      <div className="f-col justify-around gap-2 py-2">
        <p className="text-center text-txt-muted font-semibold">
          Acadify – Your Smart Academic Companion
        </p>
        <p className="text-center text-txt-muted font-semibold">
          Join Us To Experience :
        </p>
      </div>
      <div className="r-col px-4 mb-10">
        <p className="text-txt-muted font-semibold my-4">For Students : </p>
        <div className="f-row justify-start gap-4 overflow-auto no-scrollbar">
          {studentFeatures.map(({ label, icon: Icon }, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-between w-36 h-40 p-4 bg-bg-dark shadow-none"
            >
              <CardTitle className="text-center text-sm text-[#6665af] font-semibold">
                {label}
              </CardTitle>
              <CardContent>
                <Icon size={65} className="text-txt" />
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-txt-muted font-semibold my-4">For Universities : </p>
        <div className="f-row justify-start gap-4 overflow-auto no-scrollbar">
          {universityFeatures.map(({ label, icon: Icon }, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-between w-36 h-40 p-4 bg-bg-dark shadow-none"
            >
              <CardTitle className="text-center text-sm text-[#6665af] font-semibold">
                {label}
              </CardTitle>
              <CardContent>
                <Icon size={65} className="text-txt" />
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-txt-muted font-semibold my-4">For Teachers : </p>
        <div className="f-row justify-start gap-4 overflow-auto no-scrollbar">
          {teacherFeatures.map(({ label, icon: Icon }, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-between w-36 h-40 p-4 bg-bg-dark shadow-none"
            >
              <CardTitle className="text-center text-sm text-[#6665af] font-semibold">
                {label}
              </CardTitle>
              <CardContent>
                <Icon size={65} className="text-txt" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default root;
