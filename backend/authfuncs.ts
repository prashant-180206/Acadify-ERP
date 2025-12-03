"use server";

import { StudentSchemaType } from "@/app/admin/add_student/schema";
import { TeacherSchemaType } from "@/app/admin/add_teacher/schema";
import { createClient } from "@/lib/supabaseServer";
import { UserAppMetadata } from "@supabase/supabase-js";

// -------------------------
// SIMPLE SERVER-SIDE CACHE
// -------------------------
let cachedUser: UserAppMetadata | null = null;
let cachedStudent: StudentSchemaType | null = null;
let cachedTeacher: TeacherSchemaType | null = null;

export async function addUser(email: string, password: string, role: string) {
  const supabase = await createClient();
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role: role.toLowerCase() },
    },
  });
}

export async function signInUser(email: string, password: string) {
  const supabase = await createClient();
  const result = await supabase.auth.signInWithPassword({ email, password });

  // Clear cache because auth state changed
  cachedUser = null;
  cachedStudent = null;
  cachedTeacher = null;

  return result;
}

// -------------------------
// GET USER DATA (CACHED)
// -------------------------
export async function getUserData() {
  // if cache exists → return instantly
  if (cachedUser) return cachedUser;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      console.error("getUserData error:", error);
      return null;
    }

    cachedUser = data.user;
    return cachedUser;
  } catch (error) {
    console.error("getUserData catch error:", error);
    return null;
  }
}

// -------------------------
// LOGGED-IN STUDENT (CACHED)
// -------------------------
export async function loggedInStudent() {
  if (cachedStudent) return cachedStudent;

  try {
    const user = await getUserData();
    if (!user?.email) return null;

    const id = user.email.split("@")[0].split(".")[1];

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      console.error("Error fetching student data:", error);
      return null;
    }

    const result: StudentSchemaType = {
      ...data,
      firstName: data.first_name,
      lastName: data.last_name,
      fatherName: data.father_name,
      contactNo: data.contact_no,
    };

    cachedStudent = result;
    return result;
  } catch (error) {
    console.error("loggedInStudent error:", error);
    return null;
  }
}

// -------------------------
// LOGGED-IN TEACHER (CACHED)
// -------------------------
export async function loggedInTeacher() {
  if (cachedTeacher) return cachedTeacher;

  try {
    const user = await getUserData();
    if (!user?.email) return null;

    const id = user.email.split("@")[0].split(".")[1];

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("teachers")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      console.error("Error fetching teacher data:", error);
      return null;
    }

    const result: TeacherSchemaType = {
      ...data,
      highestQualification: data.highest_qualification,
      contactNo: data.contact_no,
    };
    cachedTeacher = result;

    return result;
  } catch (error) {
    console.error("loggedInTeacher error:", error);
    return null;
  }
}
