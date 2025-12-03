"use server";

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

export type DBCourse = {
  course_id: number;
  course_name: string;
  credits: number;
  num_lectures: number;
  department_id: number;
  semester: number;
};

export async function getCoursesByTeacherId(
  teacherId: number
): Promise<DBCourse[]> {
  const idsResult = await supabase
    .from("teacher_courses")
    .select("course_id")
    .eq("teacher_id", teacherId);

  const ids =
    idsResult.data?.map((r: { course_id: number }) => r.course_id) ?? [];
  if (ids.length === 0) return [];

  const { data, error } = await supabase
    .from("courses")
    .select(
      "course_id, course_name, credits, num_lectures, department_id, semester"
    )
    .in("course_id", ids);

  if (error) throw error;
  // data is any[]; map to DBCourse
  return (data ?? []).map((r: DBCourse) => ({
    course_id: Number(r.course_id),
    course_name: String(r.course_name),
    credits: Number(r.credits),
    num_lectures: Number(r.num_lectures),
    department_id: Number(r.department_id),
    semester: Number(r.semester),
  }));
}

export async function getCoursesByDepartment(
  departmentId: number
): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("department_id", departmentId);

  if (error) {
    console.log(
      `Failed to fetch courses for department ${departmentId}: ${error.message}`
    );
  }

  return data ?? [];
}

export const addCourse = async (course: Course): Promise<void> => {
  const { error } = await supabase.from("courses").insert([course]);

  if (error) {
    throw new Error(`Failed to add course: ${error.message}`);
  }
};

export const getCoursesForStudent = async (
  department_id: number,
  semester: number
) => {
  const { data } = await supabase
    .from("courses")
    .select("*")
    .eq("semester", semester)
    .eq("department_id", department_id);

  return data as Course[];
};

export async function getCourseByName(
  courseName: string
): Promise<DBCourse | null> {
  try {
    // Validation
    if (!courseName || typeof courseName !== "string") {
      console.error("getCourseByName: Invalid course name provided");
      return null;
    }

    // Trim whitespace and validate non-empty
    const trimmedName = courseName.trim();
    if (trimmedName.length === 0) {
      console.error("getCourseByName: Empty course name provided");
      return null;
    }

    console.log(`Fetching course by name: "${trimmedName}"`);

    // Query database for exact match first
    let { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("course_name", trimmedName)
      .single();

    // If exact match fails, try case-insensitive search
    if (error || !data) {
      console.log(
        `Exact match failed, trying case-insensitive search for: "${trimmedName}"`
      );

      const { data: searchData, error: searchError } = await supabase
        .from("courses")
        .select("*")
        .ilike("course_name", trimmedName)
        .limit(1)
        .single();

      if (searchError || !searchData) {
        console.error("getCourseByName error (both exact and ilike failed):", {
          exactError: error,
          searchError,
          courseName: trimmedName,
        });
        return null;
      }

      data = searchData;
    }

    console.log(`Successfully found course:`, {
      course_id: data.course_id,
      course_name: data.course_name,
      department_id: data.department_id,
    });

    return data as DBCourse;
  } catch (error) {
    console.error("getCourseByName catch error:", error);
    return null;
  }
}
