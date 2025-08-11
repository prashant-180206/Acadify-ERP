export type DB_Course = {
  course_id: number;
  course_name: string;
  credits: number;
  num_lectures: number;
  department_id: number;
  semester: number;
};

export const courses: DB_Course[] = [
  {
    course_id: 1001,
    course_name: "Engineering Mathematics-I",
    credits: 4,
    num_lectures: 4,
    department_id: 101,
    semester: 1,
  },
  {
    course_id: 1001,
    course_name: "Engineering Mathematics-I",
    credits: 4,
    num_lectures: 4,
    department_id: 101,
    semester: 1,
  },
  {
    course_id: 1001,
    course_name: "Engineering Mathematics-I",
    credits: 4,
    num_lectures: 4,
    department_id: 101,
    semester: 1,
  },
  {
    course_id: 1001,
    course_name: "Engineering Mathematics-I",
    credits: 4,
    num_lectures: 4,
    department_id: 101,
    semester: 1,
  },
  {
    course_id: 1001,
    course_name: "Engineering Mathematics-I",
    credits: 4,
    num_lectures: 4,
    department_id: 101,
    semester: 1,
  },
];

export type DB_CourseInfo = {
  section_id: number; // PK for sections
  course_id: number; // FK → courses.course_id
  section: string;
  units: string[];
};

export const courseinfo: DB_CourseInfo[] = [
  {
    section_id: 1,
    course_id: 1001,
    section: "CS-K",
    units: [
      "Electromechanics",
      "Thermodynamics",
      "Control Systems",
      "Power Electronics",
    ],
  },
  {
    section_id: 2,
    course_id: 1001,
    section: "MA-A",
    units: ["Calculus I", "Linear Algebra", "Probability", "Statistics"],
  },
  {
    section_id: 3,
    course_id: 1001,
    section: "PH-B",
    units: ["Mechanics", "Electromagnetism", "Optics", "Quantum Physics"],
  },
  {
    section_id: 4,
    course_id: 1001,
    section: "CS-M",
    units: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Operating Systems",
    ],
  },
];

export type DB_Assignment = {
  assignment_id: number; // PK
  section_id: number; // FK → courseinfo.section_id
  name: string;
  dueDate: string; // YYYY-MM-DD
};

export const assignments: DB_Assignment[] = [
  {
    assignment_id: 1,
    section_id: 1,
    name: "Assignment 1",
    dueDate: "2025-09-17",
  },
  {
    assignment_id: 2,
    section_id: 1,
    name: "Assignment 2",
    dueDate: "2025-09-24",
  },
  {
    assignment_id: 3,
    section_id: 1,
    name: "Assignment 3",
    dueDate: "2025-10-01",
  },
  {
    assignment_id: 4,
    section_id: 1,
    name: "Assignment 4",
    dueDate: "2025-10-08",
  },

  {
    assignment_id: 5,
    section_id: 2,
    name: "Assignment 1",
    dueDate: "2025-09-12",
  },
  {
    assignment_id: 6,
    section_id: 2,
    name: "Assignment 2",
    dueDate: "2025-09-19",
  },
  {
    assignment_id: 7,
    section_id: 2,
    name: "Assignment 3",
    dueDate: "2025-09-26",
  },
  {
    assignment_id: 8,
    section_id: 2,
    name: "Assignment 4",
    dueDate: "2025-10-03",
  },

  {
    assignment_id: 9,
    section_id: 3,
    name: "Assignment 1",
    dueDate: "2025-09-12",
  },
  {
    assignment_id: 10,
    section_id: 3,
    name: "Assignment 2",
    dueDate: "2025-09-19",
  },
  {
    assignment_id: 11,
    section_id: 3,
    name: "Assignment 3",
    dueDate: "2025-09-26",
  },
  {
    assignment_id: 12,
    section_id: 3,
    name: "Assignment 4",
    dueDate: "2025-10-03",
  },

  {
    assignment_id: 13,
    section_id: 4,
    name: "Assignment 1",
    dueDate: "2025-09-12",
  },
  {
    assignment_id: 14,
    section_id: 4,
    name: "Assignment 2",
    dueDate: "2025-09-19",
  },
  {
    assignment_id: 15,
    section_id: 4,
    name: "Assignment 3",
    dueDate: "2025-09-26",
  },
  {
    assignment_id: 16,
    section_id: 4,
    name: "Assignment 4",
    dueDate: "2025-10-03",
  },
];

export type DB_Submission = {
  submission_id: number;
  assignment_id: number; // FK → assignments.assignment_id
  student_course_code: string; // e.g., LDAM
  submissionDate: string | null;
  status: "Submitted" | "Not Submitted";
  grade: string | null;
  remarks: string | null;
};

export const submissions: DB_Submission[] = [
  {
    submission_id: 1,
    assignment_id: 1,
    student_course_code: "LDAM",
    submissionDate: "2025-09-15",
    status: "Submitted",
    grade: "A",
    remarks: "Well done, complete solutions.",
  },
  {
    submission_id: 2,
    assignment_id: 1,
    student_course_code: "LDAM",
    submissionDate: "2025-09-23",
    status: "Submitted",
    grade: "B+",
    remarks: "Good work, minor improvements needed.",
  },
  {
    submission_id: 3,
    assignment_id: 1,
    student_course_code: "LDAM",
    submissionDate: null,
    status: "Not Submitted",
    grade: null,
    remarks: null,
  },
  {
    submission_id: 4,
    assignment_id: 1,
    student_course_code: "LDAM",
    submissionDate: "2025-10-09",
    status: "Not Submitted",
    grade: "C",
    remarks: "Late submission, partial credit given.",
  },
];
