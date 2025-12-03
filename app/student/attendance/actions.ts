"use server";

import { getStudentAttendanceDetails } from "@/backend/attendance";
import { loggedInStudent } from "@/backend/authfuncs";

export async function getAttendanceForCourse(courseId: string) {
  try {
    // Get logged in student data
    const studentData = await loggedInStudent();

    if (!studentData || !studentData.rollNo) {
      return { success: false, data: [], error: "Student not found" };
    }

    // Get attendance details for the course
    const attendanceData = await getStudentAttendanceDetails(
      studentData.rollNo,
      parseInt(courseId)
    );

    return { success: true, data: attendanceData, error: null };
  } catch (error) {
    console.error("Error getting attendance for course:", error);
    return {
      success: false,
      data: [],
      error: "Failed to fetch attendance data",
    };
  }
}
