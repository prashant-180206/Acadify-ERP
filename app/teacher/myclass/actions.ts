"use server";

import { getStudentById, StudentDetails } from "@/backend/divisions";

export async function getStudentInfo(
  studentId: number
): Promise<StudentDetails | null> {
  return await getStudentById(studentId);
}
