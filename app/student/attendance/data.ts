export type Lecture = {
  id: string;
  course_name: string;
  class_name: string;
  lectures_attended: number;
  total_lectures: number;
};

// Generate realistic attendance data with varied patterns
export function generateRealisticLectures(): Lecture[] {
  const courses = [
    { name: "Data Structures and Algorithms", class: "CS-K", id: "1001" },
    { name: "Database Management Systems", class: "CS-L", id: "1002" },
    { name: "Operating Systems", class: "CS-M", id: "1003" },
    { name: "Computer Networks", class: "CS-N", id: "1004" },
    { name: "Software Engineering", class: "CS-O", id: "1005" },
    { name: "Machine Learning", class: "CS-P", id: "1006" },
  ];

  return courses.map((course) => {
    const totalLectures = Math.floor(Math.random() * 10) + 25; // 25-35 lectures
    // Vary attendance rates: some courses better attended than others
    const baseAttendanceRate = 0.65 + Math.random() * 0.3; // 65-95%
    const lecturesAttended = Math.max(
      Math.floor(totalLectures * baseAttendanceRate),
      Math.floor(totalLectures * 0.5) // Minimum 50% attendance
    );

    return {
      id: course.id,
      course_name: course.name,
      class_name: course.class,
      lectures_attended: lecturesAttended,
      total_lectures: totalLectures,
    };
  });
}

export const recentLectures: Lecture[] = generateRealisticLectures();
