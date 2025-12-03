// File: components/AttendanceDialogServer.tsx
import React from "react";
import AttendanceDialogClient, {
  SimpleStudent,
} from "./attendancedialogclient";
import { loggedInTeacher } from "@/backend/authfuncs";
import { getStudentsByTeacher } from "@/backend/divisions";
// import AttendanceDialogClient, { SimpleStudent } from "./AttendanceDialogClient";

// This is the SERVER component you can use in the app router (app/...) or pages.
// It accepts optional props; by default it renders with static sample students.

type Props = {
  students?: SimpleStudent[];
  // optional handler for server-side submission (for example, calling an API route)
  submitUrl?: string; // if provided, the client can POST to this URL (you'll wire it in client)
};

const defaultStudents: SimpleStudent[] = [
  { rollNo: "01", name: "Raj Jigarnon" },
  { rollNo: "02", name: "Sita Verma" },
  { rollNo: "03", name: "Aman Singh" },
];

export default async function AttendanceDialogServer({}: Props) {
  // If you want to fetch students on the server (by teacherId), do that here.
  // Example (psuedocode):
  // const students = await getStudentsForTeacher(teacherId);
  const data = await loggedInTeacher();
  if (!data) {
    return <div className="flex items-center justify-center h-full"></div>;
  }
  const students = await getStudentsByTeacher(data.id || 0);
  return (
    // Server component can render the client component and pass props
    <div>
      <AttendanceDialogClient students={students} />
    </div>
  );
}
