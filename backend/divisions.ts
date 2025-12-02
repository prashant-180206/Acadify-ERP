import { supabase } from "@/lib/supabase";

type TimetableItem = {
  day: string;           // "Monday"
  timeslot: string;      // "9-10"
  courseid: string;      // e.g. "MATH101" or course_name / course_id
  instructorname: string; // "Dr. Alice"
  instructorid: string;   // "A01" or teacher id as string
};

/* DB row types (match your Postgres schemas) */
// type TimetableRow = {
//   timetable_id: number;
//   course_id: number;
//   day_name: string;
//   slot_no: number;
//   division: string;
//   teacher_id: number;
// };

type CourseRow = {
  course_id: number;
  course_name: string;
  credits: number;
  num_lectures: number;
  department_id: number;
  semester: number;
  // optional code field if present in your schema
  course_code?: string | null;
};

type TeacherRow = {
  id: number;
  first_name: string | null;
  last_name: string | null;
  // optional code/alias field if present
//   teacher_code?: string | null;
  // other columns exist but are not used here
};

/**
 * Fetch timetable for a division and return array of objects in the shape:
 * { day, timeslot, courseid, instructorname, instructorid }
 *
 * - `division` is the divisions.class_name value (e.g. "CS-FY-A")
 */
export async function getTimetableForDivision(
  division: string
): Promise<TimetableItem[]> {
  if (!division || !division.trim()) return [];

  // short->full day names mapping
  const DAY_FULL: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };

  // slot number -> timeslot string (edit as needed)
  const SLOT_MAP: Record<number, string> = {
    1: "9-10",
    2: "10-11",
    3: "11-12",
    4: "13-14", // "1-2"
    5: "14-15", // "2-3"
    6: "15-16", // "3-4"
    7: "8-9",
  };

  // 1) fetch timetable rows for the division
  const { data: ttRows, error: ttErr } = await supabase
    .from("timetable")
    .select("timetable_id, course_id, day_name, slot_no, division, teacher_id")
    .eq("division", division);

  if (ttErr) {
    throw ttErr;
  }
  if (!ttRows || ttRows.length === 0) return [];

  // 2) fetch all referenced courses
  const courseIds = Array.from(new Set(ttRows.map((r) => r.course_id)));
  const { data: courses, error: courseErr } = await supabase
    .from("courses")
    .select("*")
    .in("course_id", courseIds);

  if (courseErr) throw courseErr;
  const courseById = new Map<number, CourseRow>();
  (courses ?? []).forEach((c) => courseById.set(c.course_id, c));

  // 3) fetch all referenced teachers
  const teacherIds = Array.from(new Set(ttRows.map((r) => r.teacher_id)));
  const { data: teachers, error: teacherErr } = await supabase
    .from("teachers")
    .select("id, first_name, last_name")
    .in("id", teacherIds);

  if (teacherErr) throw teacherErr;
  const teacherById = new Map<number, TeacherRow>();
  (teachers ?? []).forEach((t) => teacherById.set(t.id, t));

  // 4) map timetable rows -> desired shape
  const mapped: TimetableItem[] = ttRows.map((r) => {
    const course = courseById.get(r.course_id);
    const teacher = teacherById.get(r.teacher_id);

    // choose a readable course id: prefer course_code (if you have it), else course_name, else numeric id
    const courseid =
      (course && (course.course_code ?? course.course_name ?? String(course.course_id))) ??
      String(r.course_id);

    // instructor id prefer teacher_code else id
    const instructorid = (teacher && ( String(teacher.id))) ?? String(r.teacher_id);

    const instructorname =
      teacher && (teacher.first_name || teacher.last_name)
        ? [teacher.first_name, teacher.last_name].filter(Boolean).join(" ")
        : `Teacher ${r.teacher_id}`;

    const dayFull = DAY_FULL[r.day_name] ?? r.day_name;
    const timeslot = SLOT_MAP[Number(r.slot_no)] ?? `slot-${r.slot_no}`;

    return {
      day: dayFull,
      timeslot,
      courseid: String(courseid),
      instructorname,
      instructorid: String(instructorid),
    };
  });

  // 5) stable sort by weekday order then by slot number
  const WEEK_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  mapped.sort((a, b) => {
    const da = WEEK_ORDER.indexOf(a.day) === -1 ? 999 : WEEK_ORDER.indexOf(a.day);
    const db = WEEK_ORDER.indexOf(b.day) === -1 ? 999 : WEEK_ORDER.indexOf(b.day);
    if (da !== db) return da - db;

    // get slot number from timeslot by reverse lookup in SLOT_MAP
    const sa = Number(
      Object.entries(SLOT_MAP).find(([, v]) => v === a.timeslot)?.[0] ?? "999"
    );
    const sb = Number(
      Object.entries(SLOT_MAP).find(([, v]) => v === b.timeslot)?.[0] ?? "999"
    );
    return sa - sb;
  });

  return mapped;
}
