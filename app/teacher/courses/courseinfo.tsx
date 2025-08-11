import React from "react";
import { assignments, courseinfo, DB_Course } from "./data";
import { lightFormat, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import AssignmentFormDialog from "./addassignment";
import SubmissionsDialog from "./submissionsdialog";

const Courseinfo = ({ course }: { course: DB_Course }) => {
  // For convenience, assuming your course object like: {: [{ section, units, assignments }] }
  const section = course.course_id;

  return (
    <div className="bg-bg-dark flex-1/2 rounded-xl p-6 flex flex-col w-full text-sm md:text-xl h-full">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
        {course.course_name} - {section}
      </h2>
      <section className="flex flex-col md:flex-row gap-8 h-full overflow-auto no-scrollbar">
        <div className="flex-1/2">
          <h3 className="font-semibold mb-2">Units :</h3>
          <ul className="space-y-2 ">
            {courseinfo[0].units.map((unit, idx) => (
              <li key={idx} className="truncate">
                {idx + 1}. {unit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1/2 ">
          <h3 className="font-semibold mb-2">Assignments :</h3>
          <ul className="space-y-4 h-full overflow-auto no-scrollbar">
            {assignments.map((assignment, idx) => (
              <li key={idx} className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-medium">Assignment {idx + 1}</div>
                  <div className="text-sm text-gray-600">
                    Due:{" "}
                    {lightFormat(parseISO(assignment.dueDate), "dd/MM/yyyy")}
                  </div>
                </div>
                <SubmissionsDialog assignmentId={assignment.assignment_id} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex justify-center mt-8">
        <AssignmentFormDialog />
      </div>
    </div>
  );
};

export default Courseinfo;
