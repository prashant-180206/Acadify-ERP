"use server";

import { addAttendanceForRolls } from "@/backend/attendance";
import { revalidatePath } from "next/cache";

export async function submitAttendance(
  courseId: number,
  instructorId: number,
  date: string,
  presentStudentRolls: number[]
) {
  try {
    // Validation
    if (!courseId || courseId <= 0) {
      return {
        success: false,
        message: "Invalid course ID provided",
      };
    }

    if (!instructorId || instructorId <= 0) {
      return {
        success: false,
        message: "Invalid instructor ID provided",
      };
    }

    if (!date) {
      return {
        success: false,
        message: "Date is required",
      };
    }

    // Validate roll numbers array
    if (!Array.isArray(presentStudentRolls)) {
      return {
        success: false,
        message: "Present student rolls must be an array",
      };
    }

    // Filter out invalid roll numbers
    const validRolls = presentStudentRolls.filter(
      (roll) => typeof roll === "number" && roll > 0
    );

    console.log("Submitting attendance:", {
      courseId,
      instructorId,
      date,
      validRolls,
    });

    // Call backend function
    const result = await addAttendanceForRolls(
      courseId,
      instructorId,
      date,
      validRolls
    );

    if (!result.success) {
      console.error("Backend attendance error:", result.error);
      return {
        success: false,
        message:
          result.error?.message || "Failed to submit attendance to database",
      };
    }

    // Revalidate the attendance page to show updated data
    revalidatePath("/teacher/attendance");

    return {
      success: true,
      message: `Attendance submitted successfully for ${validRolls.length} students`,
    };
  } catch (error) {
    console.error("Error in submitAttendance action:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
