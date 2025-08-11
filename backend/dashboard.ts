type DashboardData = {
  lectures_today: {
    class: string;
    subject: string;
    time: string;
  }[];
  my_attendance: {
    percentage: number;
  };
  class_attendance: {
    class: string;
    total_students: number;
    present_students: number;
    attendance_percentage: number;
  };
  student_queries: {
    pending: string[]; // Array of query strings, empty if no pending queries
  };
  assignments: {
    class: string;
    subject: string;
    assignment_title: string;
    due_date: string; // format: "DD/MM/YYYY"
  }[];
};

export const teacherDashboardData: DashboardData = {
  lectures_today: [
    { class: "CS-K", subject: "LAADE", time: "10:00-11:00" },
    { class: "CS-K", subject: "LAADE", time: "10:00-11:00" },
    { class: "CS-K", subject: "LAADE", time: "10:00-11:00" },
    { class: "CS-K", subject: "LAADE", time: "10:00-11:00" },
  ],
  my_attendance: {
    percentage: 80,
  },
  class_attendance: {
    class: "CS-K",
    total_students: 80,
    present_students: 80,
    attendance_percentage: 80,
  },
  student_queries: {
    pending: [],
  },
  assignments: [
    {
      class: "CS-K",
      subject: "LAADE",
      assignment_title: "Assignment 1",
      due_date: "27/07/2025",
    },
    {
      class: "CS-K",
      subject: "LAADE",
      assignment_title: "Assignment 1",
      due_date: "27/07/2025",
    },
    {
      class: "CS-K",
      subject: "LAADE",
      assignment_title: "Assignment 1",
      due_date: "27/07/2025",
    },
    {
      class: "CS-K",
      subject: "LAADE",
      assignment_title: "Assignment 1",
      due_date: "27/07/2025",
    },
  ],
};
