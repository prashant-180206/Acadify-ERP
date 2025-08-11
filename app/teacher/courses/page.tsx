import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseManager from "./cousemanager";

const Courses = () => {
  return (
    <main className="f-col justify-start h-screen">
      <h1 className="heading col-span-3 pb-4 mb-0">Courses</h1>
      <div className="w-full overflow-auto flex-1/2 pb-10">
        <CourseManager />
      </div>
    </main>
  );
};

export default Courses;
