import { supabase } from "@/lib/supabase";

// types (add to your types file if you already have them)
export type TimetableItem = {
  day: string; // "Monday"
  timeslot: string; // "8-9" or "9-10" etc.
  courseid: string; // prefer course_code, else course_name, else id
  instructorname: string; // "Dr. Alice"
  instructorid: string; // teacher code or id as string
  division?: string; // class/division (optional)
  slot_no: number; // numeric slot for sorting or reference
  course_name: string;
};

// helper: returns todays lectures for a teacher
export async function getTodaysLecturesForInstructor(
  teacherId: number
): Promise<TimetableItem[]> {
  if (teacherId === null || teacherId === undefined) return [];

  // map JS Date getDay() -> short day name used in timetable (Mon,Tue,...)
  const DAY_SHORT_FROM_INDEX: Record<number, string> = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  const DAY_FULL: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };

  // slot number -> timeslot string (adjust if your slots differ)
  const SLOT_MAP: Record<number, string> = {
    1: "9-10",
    2: "10-11",
    3: "11-12",
    4: "13-14", // "1-2"
    5: "14-15", // "2-3"
    6: "15-16", // "3-4"
    7: "8-9",
  };

  // compute today's short day name in the user's local time (Asia/Kolkata assumed)
  // If you need to force timezone use a library like luxon; here we rely on runtime timezone.
  const now = new Date();
  const todayIndex = now.getDay(); // 0 (Sun) .. 6 (Sat)
  const shortDay = DAY_SHORT_FROM_INDEX[todayIndex] ?? "Mon";
  const fullDay = DAY_FULL[shortDay] ?? shortDay;

  // 1) fetch timetable rows for this teacher for today's short day name
  const { data: ttRows, error: ttErr } = await supabase
    .from("timetable")
    .select("timetable_id, course_id, day_name, slot_no, division, teacher_id")
    .eq("teacher_id", teacherId)
    .eq("day_name", shortDay);

  if (ttErr) throw ttErr;
  if (!ttRows || ttRows.length === 0) return [];

  // 2) fetch courses referenced
  const courseIds = Array.from(
    new Set(ttRows.map((r: { course_id: number }) => r.course_id))
  ).filter(Boolean);
  const { data: courses, error: courseErr } = await supabase
    .from("courses")
    .select("course_id, course_name")
    .in("course_id", courseIds.length ? courseIds : [-1]); // avoid empty .in()

  if (courseErr) throw courseErr;
  const courseById = new Map<
    number,
    { course_id: number; course_name: string }
  >();
  (courses ?? []).forEach((c: { course_id: number; course_name: string }) =>
    courseById.set(c.course_id, c)
  );

  // 3) fetch teacher record (for name / teacher_code)
  const { data: teacherArr, error: teacherErr } = await supabase
    .from("teachers")
    .select("id, first_name, last_name ")
    .eq("id", teacherId)
    .limit(1);

  if (teacherErr) throw teacherErr;
  const teacher = (teacherArr && teacherArr[0]) || null;

  const instructorid = String(teacherId) ?? String(teacherId);
  const instructorname =
    teacher && (teacher.first_name || teacher.last_name)
      ? [teacher.first_name, teacher.last_name].filter(Boolean).join(" ")
      : `Teacher ${teacherId}`;

  // 4) map rows to TimetableItem
  const mapped: TimetableItem[] = (ttRows as any).map((r) => {
    const course = courseById.get(r.course_id);
    const courseid =
      (course &&
        (course.course_name ??
          course.course_name ??
          String(course.course_id))) ??
      String(r.course_id);

    const timeslot = SLOT_MAP[Number(r.slot_no)] ?? `slot-${r.slot_no}`;

    return {
      day: fullDay,
      course_name: course ? course.course_name : "Unknown Course",
      timeslot: timeslot,
      courseid: String(courseid),
      instructorname,
      instructorid: String(instructorid),
      division: r.division ?? undefined,
      slot_no: Number(r.slot_no ?? 0),
    };
  });

  // 5) sort by slot_no (ascending)
  mapped.sort((a, b) => (a.slot_no ?? 999) - (b.slot_no ?? 999));

  return mapped;
}
