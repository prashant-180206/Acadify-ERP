import { supabase } from "@/lib/supabase";

function toDDMMYYYY(d: Date | string): string {
  const dt = typeof d === "string" ? new Date(d) : d;
  const dd = String(dt.getDate()).padStart(2, "0");
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const yyyy = dt.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

/** ADD attendance (no returned rows) */
export async function addAttendanceForRolls(
  courseId: number,
  instructorId: number,
  dateInput: Date | string,
  rollNumbers: number[]
): Promise<{ success: boolean; error: any | null }> {
  if (!Array.isArray(rollNumbers)) {
    throw new Error("rollNumbers must be an array of integers");
  }

  const dateText = toDDMMYYYY(dateInput);

  // RPC call — function inserts, but does NOT return rows
  const { error } = await supabase.rpc("add_attendance", {
    p_course: courseId,
    p_instructor: instructorId,
    p_date_text: dateText,
    p_rolls: rollNumbers,
  });

  if (error) return { success: false, error };

  return { success: true, error: null };
}

export async function getAttendanceByInstructor(
  instructorId: number,
  courseId: number
): Promise<any[]> {
  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("instructor_id", instructorId)
    .eq("course_id", courseId)
    .order("roll_no", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getAttendanceByStudent(
  courseId: number,
  studentRoll: number
): Promise<any[]> {
  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("course_id", courseId)
    .eq("roll_no", studentRoll)
    .order("date", { ascending: true });

  if (error) throw error;
  return data ?? [];
}
