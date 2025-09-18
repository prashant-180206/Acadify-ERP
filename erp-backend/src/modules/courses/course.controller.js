// src/modules/courses/course.controller.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 👉 Create a new course
export const createCourse = async (req, res) => {
  try {
    const { code, title, description, credits, departmentId, teacherId } = req.body;

    const course = await prisma.course.create({
      data: {
        code,
        title,
        description,
        credits,
        departmentId,
        teacherId,
      },
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: { department: true, teacher: true },
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get single course by ID
export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findUnique({
      where: { id: parseInt(id) },
      include: { department: true, teacher: true },
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Update a course
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, title, description, credits, departmentId, teacherId } = req.body;

    const updated = await prisma.course.update({
      where: { id: parseInt(id) },
      data: { code, title, description, credits, departmentId, teacherId },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.course.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
