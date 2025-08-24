"use client";
import React, { useState } from "react";
import { courses, DB_Course } from "./data";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Courseinfo from "./courseinfo";

const CourseManager = () => {
  const [course, setCourse] = useState<DB_Course>(courses[0]);
  return (
    <section className="f-row flex-col md:flex-row w-full h-auto md:h-full gap-10 items-start text-lg px-10 overflow-auto no-scrollbar ">
      <div className="flex flex-col gap-4 h-full no-scrollbar overflow-auto justify-start flex-1/3 w-full md:w-auto ">
        {courses.map((val, idx) => {
          return (
            <Card key={idx} className="w-full">
              <CardHeader>
                <CardTitle>{val.course_name}</CardTitle>
                <CardDescription>
                  {val.course_id} Semester:{val.semester}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="rounded-full" onClick={() => setCourse(val)}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <section className="flex-2/3 h-full overflow-auto no-scrollbar rounded-2xl bg-bg-dark ">
        <Courseinfo course={course} />
      </section>
    </section>
  );
};

export default CourseManager;
