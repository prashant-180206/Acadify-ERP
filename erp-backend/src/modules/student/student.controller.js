import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ✅ Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: { user: true }, // show linked user info
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
  }
};

// ✅ Get single student by rollNo
export const getStudentByRollNo = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const student = await prisma.student.findUnique({
      where: { rollNo },
      include: { user: true },
    });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Error fetching student" });
  }
};

// ✅ Add a student (linked to user)
export const addStudent = async (req, res) => {
  try {
    const { rollNo, program, year, userId } = req.body;

    const student = await prisma.student.create({
      data: {
        rollNo,
        program,
        year,
        user: userId ? { connect: { id: userId } } : undefined,
      },
    });

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Error creating student" });
  }
};
