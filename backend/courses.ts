"use server"

import { supabase } from "@/lib/supabase";

export interface Course {
  course_id?: number;
  course_name: string;
  credits: number;
  num_lectures: number;
  department_id: number;
  semester: number;
}

interface courseWithTeacher {
  course_id: number;
  courses: {
    course_name: string;
  } | null; // null if the join fails
}


export const getCoursesForTeacher = async (t_id: number) => {
  const { data, error } = await supabase
    .from("teacher_courses")
    .select("course_id, courses ( course_name )")
    .eq("teacher_id", t_id);

  if (error) {
    throw error;
  }

  return data as unknown as courseWithTeacher[];
};

export async function getCoursesByDepartment(departmentId: number): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("department_id", departmentId);

  if (error) {
    console.log(`Failed to fetch courses for department ${departmentId}: ${error.message}`);
  }

  return data ?? [];
}

export const addCourse = async (course: Course): Promise<void> => {
  const { error } = await supabase.from("courses").insert([course]);

  if (error) {
    throw new Error(`Failed to add course: ${error.message}`);
  }
};

export const getCoursesForStudent = async (department_id:number,semester:number) => {
  const { data} = await supabase
  .from("courses")
  .select("*")
  .eq("semester", semester)
  .eq("department_id", department_id);

  return data as Course[];
}
