import { supabase } from "@/lib/supabase";

type TimetableItem = {
  day: string; // "Monday"
  timeslot: string; // "9-10"
  courseid: string; // e.g. "MATH101" or course_name / course_id
  instructorname: string; // "Dr. Alice"
  instructorid: string; // "A01" or teacher id as string
};

type CourseRow = {
  course_id: number;
  course_name: string;
  credits: number;
  num_lectures: number;
  department_id: number;
  semester: number;
  course_code?: string | null;
};

type TeacherRow = {
  id: number;
  first_name: string | null;
  last_name: string | null;
};

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
      (course &&
        (course.course_code ??
          course.course_name ??
          String(course.course_id))) ??
      String(r.course_id);

    // instructor id prefer teacher_code else id
    const instructorid =
      (teacher && String(teacher.id)) ?? String(r.teacher_id);

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
  const WEEK_ORDER = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  mapped.sort((a, b) => {
    const da =
      WEEK_ORDER.indexOf(a.day) === -1 ? 999 : WEEK_ORDER.indexOf(a.day);
    const db =
      WEEK_ORDER.indexOf(b.day) === -1 ? 999 : WEEK_ORDER.indexOf(b.day);
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

// function: get timetable for instructor (teacher)
export async function getTimetableForInstructor(
  teacherId: number
): Promise<TimetableItem[]> {
  if (!teacherId && teacherId !== 0) return [];

  // short->full day names mapping (same as your division function)
  const DAY_FULL: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };

  // slot number -> timeslot string (edit as needed; kept same as your previous map)
  const SLOT_MAP: Record<number, string> = {
    1: "9-10",
    2: "10-11",
    3: "11-12",
    4: "13-14", // "1-2"
    5: "14-15", // "2-3"
    6: "15-16", // "3-4"
    7: "8-9",
  };

  // 1) fetch timetable rows for the teacher
  const { data: ttRows, error: ttErr } = await supabase
    .from("timetable")
    .select("timetable_id, course_id, day_name, slot_no, division, teacher_id")
    .eq("teacher_id", teacherId);

  if (ttErr) throw ttErr;
  if (!ttRows || ttRows.length === 0) return [];

  // 2) fetch all referenced courses
  const courseIds = Array.from(new Set(ttRows.map((r: any) => r.course_id)));
  const { data: courses, error: courseErr } = await supabase
    .from("courses")
    .select(
      "course_id, course_name,  credits, num_lectures, department_id, semester"
    )
    .in("course_id", courseIds);

  if (courseErr) throw courseErr;
  const courseById = new Map<number, any>();
  (courses ?? []).forEach((c: any) => courseById.set(c.course_id, c));

  // 3) fetch teacher record (to get instructor name/id like teacher_code if exists)
  const { data: teacherArr, error: teacherErr } = await supabase
    .from("teachers")
    .select("*")
    .eq("id", teacherId)
    .limit(1);

  if (teacherErr) throw teacherErr;
  const teacher = (teacherArr && teacherArr[0]) ?? null;

  // helper to build instructor display id and name
  const instructorid =
    (teacher && (teacher.teacher_code ?? teacher.id ?? String(teacherId))) ??
    String(teacherId);

  const instructorname =
    teacher && (teacher.first_name || teacher.last_name || teacher.name)
      ? [teacher.title, teacher.first_name, teacher.last_name]
          .filter(Boolean)
          .join(" ")
      : `Teacher ${teacherId}`;

  // 4) map timetable rows -> desired shape
  const mapped: TimetableItem[] = (ttRows as any[]).map((r) => {
    const course = courseById.get(r.course_id);

    // prefer course_code, then course_name, then numeric id
    const courseid =
      (course &&
        (course.course_code ??
          course.course_name ??
          String(course.course_id))) ??
      String(r.course_id);

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
  const WEEK_ORDER = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  mapped.sort((a, b) => {
    const da =
      WEEK_ORDER.indexOf(a.day) === -1 ? 999 : WEEK_ORDER.indexOf(a.day);
    const db =
      WEEK_ORDER.indexOf(b.day) === -1 ? 999 : WEEK_ORDER.indexOf(b.day);
    if (da !== db) return da - db;

    // reverse lookup slot number from SLOT_MAP; fallback large number if not found
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

// returns: [{ PRN: 2001, Name: "Prsdf rgggg", Roll_No: 56 }, ...]
export type SimpleStudent = {
  PRN: number;
  Name: string;
  Roll_No: number;
};

export async function getStudentsByTeacher(
  teacherId: number
): Promise<SimpleStudent[]> {
  if (teacherId === null || teacherId === undefined) return [];

  // 1) find divisions where this teacher is class_teacher
  const { data: divRows, error: divErr } = await supabase
    .from("divisions")
    .select("class_name")
    .eq("class_teacher", teacherId);

  if (divErr) throw divErr;

  const divisionNames: string[] = (divRows ?? []).map((d: any) => d.class_name);
  if (divisionNames.length === 0) return [];

  // 2) fetch students whose class is in those divisions
  const { data: students, error: studentErr } = await supabase
    .from("students")
    .select('id, first_name, last_name, "rollNo"')
    .in("class", divisionNames);

  if (studentErr) throw studentErr;

  // 3) map -> desired shape and sort by rollNo (ascending)
  const mapped: SimpleStudent[] = (students ?? [])
    .map((s: any) => {
      const PRN = Number(s.id); // using students.id as PRN; change if you have a separate field
      const first = s.first_name ?? "";
      const last = s.last_name ?? "";
      const Name = [first, last].filter(Boolean).join(" ").trim() || "Unknown";
      const Roll_No =
        s["rollNo"] !== null && s["rollNo"] !== undefined
          ? Number(s["rollNo"])
          : 0;
      return { PRN, Name, Roll_No };
    })
    .sort((a, b) => {
      // handle missing/zero rollNos by placing them after numeric ones
      if (a.Roll_No === 0 && b.Roll_No === 0) return a.PRN - b.PRN;
      if (a.Roll_No === 0) return 1;
      if (b.Roll_No === 0) return -1;
      return a.Roll_No - b.Roll_No;
    });

  return mapped;
}

// Get full student details by student ID
export type StudentDetails = {
  id: number;
  firstName: string;
  lastName: string;
  fatherName?: string;
  motherName?: string;
  dateOfBirth?: string;
  gender?: string;
  contactNo?: string;
  email?: string;
  state?: string;
  address?: string;
  city?: string;
  pin?: string;
  aadhar?: string;
  pan?: string;
  category?: string;
  dep_id?: number;
  class?: string;
  rollNo?: number;
  semester?: number;
  HSC_score?: string;
  CET_Score?: string;
};

export async function getStudentById(
  studentId: number
): Promise<StudentDetails | null> {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("id", studentId)
      .single();

    if (error || !data) {
      console.error("Error fetching student by ID:", error);
      return null;
    }

    // Map database column names to our expected format
    return {
      id: data.id,
      firstName: data.first_name || "",
      lastName: data.last_name || "",
      fatherName: data.father_name,
      motherName: data.mother_name,
      dateOfBirth: data.date_of_birth,
      gender: data.gender,
      contactNo: data.contact_no,
      email: data.email,
      state: data.state,
      address: data.address,
      city: data.city,
      pin: data.pin,
      aadhar: data.aadhar,
      pan: data.pan,
      category: data.category,
      dep_id: data.dep_id,
      class: data.class,
      rollNo: data.rollNo,
      semester: data.semester,
      HSC_score: data.hsc_score,
      CET_Score: data.cet_score,
    };
  } catch (error) {
    console.error("getStudentById catch error:", error);
    return null;
  }
}
