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

// Sample student profile data
const student = {
  PRN_Number: 123456789,
  Name: "Rahul Kumar Sharma",
  Email: "rahul.sharma@example.com",
  Gender: "Male",
  Contact_Number: "9876543210",
  Aadhar_Card_Number: "1234-5678-9012",
  Department_id: 5,
  Class: "FE",
  Roll_No: "22",
  Semester: "I",
  Category: "Open",
  Year: 2021,
};

// Utility to extract initials for avatar
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const StudentProfilePage = () => {
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
