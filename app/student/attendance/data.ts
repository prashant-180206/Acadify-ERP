export type Lecture = {
  id: string;
  course_name: string;
  class_name: string;
  lectures_attended: number;
  total_lectures: number;
};

export const recentLectures: Lecture[] = [
  {
    id: "1",
    course_name: "LDAM",
    class_name: "CS-K",
    lectures_attended: 9,
    total_lectures: 10,
  },
  {
    id: "2",
    course_name: "MATH101",
    class_name: "MA-A",
    lectures_attended: 9,
    total_lectures: 10,
  },
  {
    id: "3",
    course_name: "PHY102",
    class_name: "PH-B",
    lectures_attended: 9,
    total_lectures: 10,
  },
  {
    id: "4",
    course_name: "CHEM110",
    class_name: "CH-C",
    lectures_attended: 9,
    total_lectures: 10,
  },
  {
    id: "5",
    course_name: "BIO105",
    class_name: "BI-D",
    lectures_attended: 6,
    total_lectures: 10,
  },
];
