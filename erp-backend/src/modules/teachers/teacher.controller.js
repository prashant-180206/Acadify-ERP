// src/modules/teachers/teacher.controller.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// 👉 Create Teacher (with optional User account)
export const createTeacher = async (req, res) => {
  try {
    const { fullName, phone, departmentId, username, email, password } = req.body;

    // 1. Create teacher
    const teacher = await prisma.teacher.create({
      data: { fullName, phone, departmentId },
    });

    // 2. If credentials provided, create linked User
    if (username && email && password) {
      const hashed = await bcrypt.hash(password, 10);

      await prisma.user.create({
        data: {
          username,
          email,
          password: hashed,
          role: "FACULTY",
          teacherId: teacher.id,
        },
      });
    }

    res.status(201).json({ message: "Teacher created successfully", teacher });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany({
      include: { department: true, courses: true, user: true },
    });
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get teacher by ID
export const getTeacherById = async (req, res) => {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { department: true, courses: true, loggedIn: true, user: true },
    });
    if (!teacher) return res.status(404).json({ error: "Teacher not found" });
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Update teacher (and linked user if needed)
export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, phone, departmentId, username, email } = req.body;

    const updatedTeacher = await prisma.teacher.update({
      where: { id: parseInt(id) },
      data: { fullName, phone, departmentId },
    });

    if (username || email) {
      await prisma.user.updateMany({
        where: { teacherId: parseInt(id) },
        data: { username, email },
      });
    }

    res.json(updatedTeacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Delete teacher (and linked user)
export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete linked user first
    await prisma.user.deleteMany({ where: { teacherId: parseInt(id) } });

    // Then delete teacher
    await prisma.teacher.delete({ where: { id: parseInt(id) } });

    res.json({ message: "Teacher and linked user deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// ... all the CRUD functions (createTeacher, getAllTeachers, etc.)

// 👉 Get all courses taught by a teacher
export const getTeacherCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      where: { teacherId: parseInt(req.params.id) },
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get all login sessions for a teacher
export const getTeacherLogins = async (req, res) => {
  try {
    const logins = await prisma.loggedInTeacher.findMany({
      where: { teacherId: parseInt(req.params.id) },
    });
    res.json(logins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
