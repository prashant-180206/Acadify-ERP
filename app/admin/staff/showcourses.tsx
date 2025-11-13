"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getCoursesForTeacher } from "@/backend/courses";

export function ShowCoursesDialog({
  teacherId,
  teacherName,
}: {
  teacherId: number;
  teacherName: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [courses, setCourses] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    setLoading(true);

    async function fetchCourses() {
      setLoading(true);
      const coursedata = await getCoursesForTeacher(teacherId);
      setCourses(coursedata.map((c) => c?.courses?.course_name ?? ""));

      setLoading(false);
    }

    fetchCourses();
  }, [open, teacherId]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full  bg-main-light w-full hover:bg-main text-txt"
        >
          Show Courses
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-bg">
        <DialogHeader>
          <DialogTitle>Courses Assigned to {teacherName}</DialogTitle>
          <DialogDescription>
            These are the courses currently linked to this teacher.
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <p className="text-muted">Loading courses...</p>
        ) : courses.length > 0 ? (
          <ul className="list-disc list-inside space-y-2 max-h-60 overflow-y-auto">
            {courses.map((name, idx) => (
              <li key={idx} className="text-main-dark">
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No courses assigned yet.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
