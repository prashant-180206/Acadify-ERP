"use server"

import { supabase } from "@/lib/supabase";

interface Course {
  course_id?: number;
  course_name: string;
  credits: number;
  num_lectures: number;
  department_id: number;
  semester: number;
}

export const getCoursesForTeacher= async (t_id: number) => {
  const { data, error } = await supabase
    .from("teacher_courses")
    .select("course_id, courses ( course_name )")
    .eq("teacher_id", t_id);

  if (error) {
    throw error;
  }
  return data ?? [];
}

export async function getCoursesByDepartment(departmentId: number): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("department_id", departmentId);

  if (error) {
    throw error;
  }

  return data ?? [];
}

export const addCourse = async (course: Course): Promise<void> => {
  const { error } = await supabase.from("courses").insert([course]);
  if (error) {
    throw error;
  }
};
