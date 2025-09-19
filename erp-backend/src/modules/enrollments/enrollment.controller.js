import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 👉 Enroll a student into a course
export const createEnrollment = async (req, res) => {
  try {
    const { studentId, courseId, semester } = req.body;

    const enrollment = await prisma.enrollment.create({
      data: { studentId, courseId, semester },
    });

    res.status(201).json({ message: "Enrollment created", enrollment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all enrollments
export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: { student: true, course: true },
    });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get enrollment by ID
export const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { student: true, course: true, attendance: true },
    });

    if (!enrollment) return res.status(404).json({ error: "Enrollment not found" });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Update enrollment (e.g., semester change)
export const updateEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    const { semester } = req.body;

    const updated = await prisma.enrollment.update({
      where: { id: parseInt(id) },
      data: { semester },
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Delete enrollment
export const deleteEnrollment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.enrollment.delete({ where: { id: parseInt(id) } });

    res.json({ message: "Enrollment deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
