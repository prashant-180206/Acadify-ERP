"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sampleTeacher = {
  t_id: 101,
  name: "Dr. Alice Johnson",
  gender: "Female",
  qualification: "PhD in Computer Science",
  designation: "HOD",
  email: "alice.johnson@university.edu",
  contact_number: "+1 234-567-8900",
  join_date: "2015-06-15",
  department: "Computer Science",
  salary: 75000,
};

const TeacherProfilePage = () => {
  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{sampleTeacher.name}</CardTitle>
          <CardDescription className="mt-1 flex flex-wrap gap-2">
            <Badge variant="outline">{sampleTeacher.designation}</Badge>
            <Badge variant="outline">{sampleTeacher.gender}</Badge>
            <Badge variant="outline">{sampleTeacher.department}</Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm md:text-base">
            <p>
              <span className="font-semibold">Qualification:</span>{" "}
              {sampleTeacher.qualification}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {sampleTeacher.email}
            </p>
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              {sampleTeacher.contact_number}
            </p>
            <p>
              <span className="font-semibold">Joined On:</span>{" "}
              {new Date(sampleTeacher.join_date).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Salary:</span> $
              {sampleTeacher.salary.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherProfilePage;
