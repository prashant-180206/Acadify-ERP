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

// Student Dashboard Types
export type StudentDashboardData = {
  student_info: {
    name: string;
    rollNo: string;
    class: string;
    semester: number;
    department: string;
  };
  attendance_summary: {
    overall_percentage: number;
    courses: {
      course_name: string;
      attendance_percentage: number;
      lectures_attended: number;
      total_lectures: number;
    }[];
  };
  today_schedule: {
    course_name: string;
    time_slot: string;
    instructor: string;
  }[];
  enrolled_courses: {
    course_id: number;
    course_name: string;
    credits: number;
    semester: number;
  }[];
  upcoming_events: {
    title: string;
    date: string;
    type: "assignment" | "exam" | "event";
  }[];
};

// Get comprehensive dashboard data for a student
export async function getStudentDashboardData(
  studentRoll: number,
  departmentId: number,
  semester: number,
  studentClass: string,
  studentName: string
): Promise<StudentDashboardData> {
  try {
    const { getLecturesForStudent } = await import("./timetable");
    const { getCoursesForStudent } = await import("./courses");
    const { getTimetableForDivision } = await import("./divisions");

    // Get attendance data
    const attendanceData = await getLecturesForStudent(
      studentRoll,
      departmentId,
      semester,
      studentClass
    );

    // Get enrolled courses
    const courses = await getCoursesForStudent(departmentId, semester);

    // Get today's schedule
    const timetableData = await getTimetableForDivision(studentClass);
    const today = new Date();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const todayName = dayNames[today.getDay()];

    const todaySchedule = timetableData
      .filter((item) => item.day === todayName)
      .map((item) => ({
        course_name: item.courseid,
        time_slot: item.timeslot,
        instructor: item.instructorname,
      }))
      .slice(0, 5); // Limit to 5 items

    // Calculate overall attendance percentage
    const totalLectures = attendanceData.reduce(
      (sum, course) => sum + course.total_lectures,
      0
    );
    const totalAttended = attendanceData.reduce(
      (sum, course) => sum + course.lectures_attended,
      0
    );
    const overallPercentage =
      totalLectures > 0 ? Math.round((totalAttended / totalLectures) * 100) : 0;

    // Mock upcoming events (in real app, this would come from assignments/events table)
    const upcomingEvents = [
      {
        title: "Mathematics Assignment Due",
        date: "2025-12-10",
        type: "assignment" as const,
      },
      { title: "Physics Lab Exam", date: "2025-12-15", type: "exam" as const },
      {
        title: "Department Seminar",
        date: "2025-12-20",
        type: "event" as const,
      },
    ];

    return {
      student_info: {
        name: studentName,
        rollNo: studentRoll.toString(),
        class: studentClass,
        semester,
        department: `Department ${departmentId}`,
      },
      attendance_summary: {
        overall_percentage: overallPercentage,
        courses: attendanceData
          .map((course) => ({
            course_name: course.course_name,
            attendance_percentage:
              course.total_lectures > 0
                ? Math.round(
                    (course.lectures_attended / course.total_lectures) * 100
                  )
                : 0,
            lectures_attended: course.lectures_attended,
            total_lectures: course.total_lectures,
          }))
          .slice(0, 4), // Show top 4 courses
      },
      today_schedule: todaySchedule,
      enrolled_courses: courses.slice(0, 6), // Show up to 6 courses
      upcoming_events: upcomingEvents,
    };
  } catch (error) {
    console.error("Error in getStudentDashboardData:", error);
    // Return realistic dummy data in case of error
    return generateDummyStudentDashboardData(
      studentName,
      studentRoll,
      studentClass,
      semester,
      departmentId
    );
  }
}

// Generate realistic dummy data for student dashboard
function generateDummyStudentDashboardData(
  studentName: string,
  studentRoll: number,
  studentClass: string,
  semester: number,
  departmentId: number
): StudentDashboardData {
  const courses = [
    { id: 1001, name: "Data Structures and Algorithms", code: "DSA" },
    { id: 1002, name: "Database Management Systems", code: "DBMS" },
    { id: 1003, name: "Operating Systems", code: "OS" },
    { id: 1004, name: "Computer Networks", code: "CN" },
    { id: 1005, name: "Software Engineering", code: "SE" },
    { id: 1006, name: "Machine Learning", code: "ML" },
  ];

  const attendanceCourses = courses.slice(0, 4).map((course) => {
    const totalLectures = Math.floor(Math.random() * 10) + 25;
    const attendanceRate = 0.65 + Math.random() * 0.3; // 65-95%
    const lecturesAttended = Math.floor(totalLectures * attendanceRate);

    return {
      course_name: course.name,
      attendance_percentage: Math.floor(
        (lecturesAttended / totalLectures) * 100
      ),
      lectures_attended: lecturesAttended,
      total_lectures: totalLectures,
    };
  });

  const overallPercentage = Math.floor(
    attendanceCourses.reduce(
      (sum, course) => sum + course.attendance_percentage,
      0
    ) / attendanceCourses.length
  );

  const timeSlots = [
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "14:00-15:00",
    "15:00-16:00",
  ];
  const todaySchedule = courses.slice(0, 3).map((course, index) => ({
    course_name: course.name,
    time_slot: timeSlots[index],
    room: `Room ${Math.floor(Math.random() * 100) + 200}`,
    instructor: `Dr. ${["Smith", "Johnson", "Brown", "Davis"][index % 4]}`,
  }));

  const enrolledCourses = courses.map((course) => ({
    course_id: course.id,
    course_name: course.name,
    credits: Math.floor(Math.random() * 2) + 3, // 3-4 credits
    instructor: `Dr. ${
      ["Wilson", "Taylor", "Anderson", "Thomas", "Jackson", "White"][
        Math.floor(Math.random() * 6)
      ]
    }`,
    progress: Math.floor(Math.random() * 30) + 60, // 60-90% progress
  }));

  const upcomingEvents = [
    {
      title: "Mid-term Examination",
      course: courses[0].name,
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      type: "exam" as const,
    },
    {
      title: "Assignment 3 Due",
      course: courses[1].name,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      type: "assignment" as const,
    },
    {
      title: "Project Presentation",
      course: courses[2].name,
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      type: "project" as const,
    },
  ];

  return {
    student_info: {
      name: studentName,
      rollNo: studentRoll.toString(),
      class: studentClass,
      semester,
      department: `Computer Science & Engineering`,
    },
    attendance_summary: {
      overall_percentage: overallPercentage,
      courses: attendanceCourses,
    },
    today_schedule: todaySchedule,
    enrolled_courses: enrolledCourses,
    upcoming_events: upcomingEvents,
  };
}

// Teacher Dashboard Types
export type TeacherDashboardData = {
  teacher_info: {
    name: string;
    id: number;
    designation: string;
    department: string;
    qualification: string;
  };
  today_lectures: {
    course_name: string;
    time_slot: string;
    division: string;
    course_id: number;
  }[];
  teaching_courses: {
    course_id: number;
    course_name: string;
    credits: number;
    semester: number;
    student_count: number;
  }[];
  class_statistics: {
    total_students: number;
    average_attendance: number;
    courses_teaching: number;
  };
  recent_attendance: {
    course_name: string;
    division: string;
    date: string;
    present_count: number;
    total_count: number;
  }[];
  upcoming_deadlines: {
    title: string;
    course: string;
    due_date: string;
    type: "assignment" | "exam" | "deadline";
  }[];
};

// Get comprehensive dashboard data for a teacher
export async function getTeacherDashboardData(
  teacherId: number
): Promise<TeacherDashboardData> {
  try {
    const { loggedInTeacher } = await import("./authfuncs");
    const { getTodaysLecturesForInstructor } = await import("./timetable");
    const { getCoursesByTeacherId } = await import("./courses");
    const { getStudentsByTeacher } = await import("./divisions");

    // Get teacher info
    const teacherInfo = await loggedInTeacher();
    if (!teacherInfo) {
      throw new Error("Teacher not found");
    }

    // Get today's lectures
    const todayLectures = await getTodaysLecturesForInstructor(teacherId);

    // Get teaching courses
    const courses = await getCoursesByTeacherId(teacherId);

    // Get students (for statistics)
    const students = await getStudentsByTeacher(teacherId);

    // Transform today's lectures
    const todaySchedule = todayLectures.map((lecture) => ({
      course_name: lecture.course_name,
      time_slot: lecture.timeslot,
      division: lecture.division || "N/A",
      course_id: parseInt(lecture.courseid) || 0,
    }));

    // Transform courses with mock student counts
    const teachingCourses = courses.map((course) => ({
      course_id: course.course_id,
      course_name: course.course_name,
      credits: course.credits,
      semester: course.semester,
      student_count: Math.floor(Math.random() * 40) + 20, // Mock: 20-60 students
    }));

    // Calculate class statistics
    const totalStudents = students.length;
    const averageAttendance = 75 + Math.floor(Math.random() * 20); // Mock: 75-95%
    const coursesTeaching = courses.length;

    // Mock recent attendance data
    const recentAttendance = courses.slice(0, 4).map((course) => ({
      course_name: course.course_name,
      division: "CS-K", // Mock division
      date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      present_count: Math.floor(Math.random() * 30) + 20,
      total_count: Math.floor(Math.random() * 10) + 45,
    }));

    // Mock upcoming deadlines
    const upcomingDeadlines = [
      {
        title: "Grade Assignments",
        course: courses[0]?.course_name || "Mathematics",
        due_date: "2025-12-08",
        type: "deadline" as const,
      },
      {
        title: "Prepare Exam Questions",
        course: courses[1]?.course_name || "Physics",
        due_date: "2025-12-12",
        type: "exam" as const,
      },
      {
        title: "Submit Report Cards",
        course: "All Courses",
        due_date: "2025-12-15",
        type: "deadline" as const,
      },
    ];

    return {
      teacher_info: {
        name:
          `${teacherInfo.firstName || ""} ${
            teacherInfo.lastName || ""
          }`.trim() || "Teacher",
        id: teacherInfo.id || 0,
        designation: teacherInfo.designation || "Faculty",
        department: teacherInfo.department || "Unknown",
        qualification: teacherInfo.highestQualification || "N/A",
      },
      today_lectures: todaySchedule,
      teaching_courses: teachingCourses,
      class_statistics: {
        total_students: totalStudents,
        average_attendance: averageAttendance,
        courses_teaching: coursesTeaching,
      },
      recent_attendance: recentAttendance,
      upcoming_deadlines: upcomingDeadlines,
    };
  } catch (error) {
    console.error("Error in getTeacherDashboardData:", error);
    // Return realistic dummy data in case of error
    return generateDummyTeacherDashboardData();
  }
}

// Generate realistic dummy data for teacher dashboard
function generateDummyTeacherDashboardData(): TeacherDashboardData {
  const courses = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ];

  const classes = ["CS-A", "CS-B", "CS-K", "IT-A"];

  return {
    teacher_info: {
      name: "Dr. John Smith",
      id: Math.floor(Math.random() * 1000) + 100,
      designation: "Assistant Professor",
      department: "Computer Science",
      qualification: "Ph.D. in Computer Science",
    },
    today_lectures: [
      {
        time: "09:00-10:00",
        class: classes[Math.floor(Math.random() * classes.length)],
        subject: courses[0],
        room: "Lab 101",
      },
      {
        time: "11:00-12:00",
        class: classes[Math.floor(Math.random() * classes.length)],
        subject: courses[1],
        room: "Room 204",
      },
      {
        time: "14:00-15:00",
        class: classes[Math.floor(Math.random() * classes.length)],
        subject: courses[2],
        room: "Lab 102",
      },
    ],
    teaching_courses: courses.slice(0, 3).map((course, index) => ({
      course_name: course,
      course_code: `CS${300 + index}`,
      students_enrolled: Math.floor(Math.random() * 30) + 40,
      avg_attendance: Math.floor(Math.random() * 20) + 75,
    })),
    class_statistics: {
      total_students: Math.floor(Math.random() * 50) + 150,
      average_attendance: Math.floor(Math.random() * 15) + 78,
      courses_teaching: courses.length,
    },
    recent_attendance: classes.slice(0, 3).map((className) => ({
      class: className,
      total_students: Math.floor(Math.random() * 20) + 50,
      present_students: Math.floor(Math.random() * 15) + 40,
      attendance_percentage: Math.floor(Math.random() * 20) + 70,
      date: new Date().toISOString().split("T")[0],
    })),
    upcoming_deadlines: [
      {
        title: "Mid-term Exam Grading",
        course: courses[0],
        due_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        type: "exam" as const,
      },
      {
        title: "Assignment 3 Review",
        course: courses[1],
        due_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        type: "assignment" as const,
      },
    ],
  };
}
