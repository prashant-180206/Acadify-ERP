import React from "react";
import {
  assignments,
  courseinfo,
  generateCourseUnits,
  generateCourseAssignments,
} from "./data";
import { lightFormat, parseISO } from "date-fns";
import AssignmentSubmissionDialog from "./submissionsdialog";
import { Course } from "@/backend/courses";

const Courseinfo = ({ course }: { course: Course }) => {
  // Generate dynamic units based on course name
  const dynamicUnits = generateCourseUnits(course.course_name);

  // Generate dynamic assignments for this course
  const dynamicAssignments = generateCourseAssignments(
    course.course_id || 1001,
    course.course_name
  );

  // Use dynamic data or fallback to static data
  const courseUnits =
    dynamicUnits.length > 0 ? dynamicUnits : courseinfo[0]?.units || [];
  const courseAssignments =
    dynamicAssignments.length > 0 ? dynamicAssignments : assignments;

  return (
    <div className="bg-bg-dark flex-1/2 rounded-xl p-6 flex flex-col w-full text-sm md:text-xl h-full">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
        {course.course_name} - {course.course_id}
      </h2>
      <section className="flex flex-col md:flex-row gap-8 h-full overflow-auto no-scrollbar">
        <div className="flex-1/2">
          <h3 className="font-semibold mb-2">Units :</h3>
          <ul className="space-y-2 ">
            {courseUnits.map((unit, idx) => (
              <li key={idx} className="truncate">
                {idx + 1}. {unit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1/2 ">
          <h3 className="font-semibold mb-2">Assignments :</h3>
          <ul className="space-y-4 h-full overflow-auto no-scrollbar">
            {courseAssignments.map((assignment, idx) => (
              <li key={idx} className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-medium">{assignment.name}</div>
                  <div className="text-sm text-gray-600">
                    Due:{" "}
                    {lightFormat(parseISO(assignment.dueDate), "dd/MM/yyyy")}
                  </div>
                </div>
                <AssignmentSubmissionDialog
                  assignmentId={assignment.assignment_id}
                  assignmentTitle={assignment.name}
                  dueDate={assignment.dueDate}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Courseinfo;
