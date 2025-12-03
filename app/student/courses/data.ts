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

// Generate dynamic course units based on course name/type
export function generateCourseUnits(courseName: string): string[] {
  const courseUnitsMap: { [key: string]: string[] } = {
    "Data Structures": [
      "Arrays and Linked Lists",
      "Stacks and Queues",
      "Trees and Binary Search Trees",
      "Hash Tables",
      "Graphs and Graph Algorithms",
    ],
    Database: [
      "Relational Model and SQL",
      "Database Design and Normalization",
      "Query Optimization",
      "Transaction Management",
      "NoSQL Databases",
    ],
    "Operating Systems": [
      "Process Management",
      "Memory Management",
      "File Systems",
      "I/O and Device Management",
      "Synchronization and Deadlocks",
    ],
    Networks: [
      "Network Protocols and Models",
      "TCP/IP and Internet Architecture",
      "Routing and Switching",
      "Network Security",
      "Wireless and Mobile Networks",
    ],
    "Software Engineering": [
      "Software Development Life Cycle",
      "Requirements Engineering",
      "Design Patterns and Architecture",
      "Testing and Quality Assurance",
      "Project Management",
    ],
    "Machine Learning": [
      "Supervised Learning Algorithms",
      "Unsupervised Learning",
      "Neural Networks and Deep Learning",
      "Model Evaluation and Selection",
      "Ethics in AI and ML",
    ],
  };

  // Find matching course type
  for (const [key, units] of Object.entries(courseUnitsMap)) {
    if (courseName.toLowerCase().includes(key.toLowerCase())) {
      return units;
    }
  }

  // Default units for unknown courses
  return [
    "Introduction and Fundamentals",
    "Core Concepts and Principles",
    "Advanced Topics",
    "Practical Applications",
    "Project Work and Assessment",
  ];
}

// Generate dynamic assignments for a course
export function generateCourseAssignments(
  courseId: number,
  courseName: string
): DB_Assignment[] {
  const assignmentTypes = [
    { name: "Programming Assignment", prefix: "PA" },
    { name: "Lab Exercise", prefix: "LAB" },
    { name: "Project Work", prefix: "PROJ" },
    { name: "Case Study", prefix: "CS" },
    { name: "Research Paper", prefix: "RP" },
  ];

  const today = new Date();
  const assignments: DB_Assignment[] = [];

  for (let i = 0; i < 4; i++) {
    const assignmentType = assignmentTypes[i % assignmentTypes.length];
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + (i + 1) * 14); // Every 2 weeks

    assignments.push({
      assignment_id: courseId * 100 + i + 1,
      section_id: courseId,
      name: `${assignmentType.prefix} ${i + 1}`,
      dueDate: dueDate.toISOString().split("T")[0],
    });
  }

  return assignments;
}
