import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { loggedInStudent } from "@/backend/authfuncs";

type StudentRaw = {
  id?: number;
  firstName?: string;
  lastName?: string;
  fatherName?: string;
  email?: string;
  gender?: string;
  contactNo?: string;
  aadhar?: string;
  dep_id?: number;
  class?: string;
  rollNo?: number | string;
  semester?: number;
  category?: string;
};

const getInitials = (name?: string) => {
  if (!name || !name.trim()) return "NA";
  const parts = name.trim().split(/\s+/).filter(Boolean).slice(0, 3); // keep up to 3 parts
  return parts.map((p) => p[0].toUpperCase()).join("");
};

const StudentProfilePage = async () => {
  const data: StudentRaw | null = await loggedInStudent();

  if (!data) {
    return (
      <div className="w-full md:p-10 flex justify-center">
        <Card className="bg-bg-dark w-full md:max-w-4xl rounded-none md:rounded-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">
              Student Profile
            </CardTitle>
            <CardDescription>
              No student is currently logged in.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const fullName = [data.firstName, data.fatherName, data.lastName]
    .filter(Boolean)
    .join(" ");

  const student = {
    PRN_Number: data.id ?? "N/A",
    Name: fullName || "Name not provided",
    Email: data.email ?? "N/A",
    Gender: data.gender ?? "N/A",
    Contact_Number: data.contactNo ?? "N/A",
    Aadhar_Card_Number: data.aadhar ?? "N/A",
    Department_id: data.dep_id ?? "N/A",
    Class: data.class ?? "N/A",
    Roll_No:
      data.rollNo !== undefined && data.rollNo !== null
        ? String(data.rollNo)
        : "N/A",
    Semester: data.semester ?? "N/A",
    Category: data.category ?? "N/A",
    Year: 2021,
  };

  return (
    <div className="w-full md:p-10 flex justify-center">
      <Card className="bg-bg-dark w-full md:max-w-4xl rounded-none md:rounded-lg">
        <CardHeader className="pb-2 flex flex-col">
          <CardTitle className="text-2xl font-bold">Student Profile</CardTitle>
          <CardDescription>Detailed information of the student</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <Avatar className="w-40 h-40 md:w-56 md:h-56">
              <AvatarFallback className="text-4xl bg-bg-main font-bold">
                {getInitials(student.Name)}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start gap-10 md:flex-row md:min-w-200 text-sm md:text-lg flex-1">
              <div className="f-col items-start gap-4">
                <p className="font-semibold text-xl">{student.Name}</p>
                <p>
                  ID: <span className="font-medium">{student.PRN_Number}</span>
                </p>
                <p>Gender: {student.Gender}</p>
                <p>Class: {student.Class}</p>
                <p>Roll No: {student.Roll_No}</p>
                <p>
                  Semester: <Badge variant="outline">{student.Semester}</Badge>
                </p>
              </div>

              <div className="f-col items-start gap-4">
                <p>
                  Category:{" "}
                  <Badge variant="secondary">{student.Category}</Badge>
                </p>
                <p>
                  Department:{" "}
                  <span className="font-medium">{student.Department_id}</span>
                </p>
                <p>
                  Email: <span className="text-blue-400">{student.Email}</span>
                </p>
                <p>Contact: {student.Contact_Number}</p>
                <p>Aadhaar: {student.Aadhar_Card_Number}</p>
                <p>Year of Admission: {student.Year}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfilePage;
