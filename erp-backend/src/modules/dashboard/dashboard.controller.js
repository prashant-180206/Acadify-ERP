import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 👉 Generate a new dashboard snapshot
export const generateDashboard = async (req, res) => {
  try {
    const totalCourses = await prisma.course.count();
    const totalTeachers = await prisma.teacher.count();
    const totalDepartments = await prisma.department.count();
    const totalStudents = await prisma.student.count();

    const dashboard = await prisma.dashboard.create({
      data: {
        totalCourses,
        totalTeachers,
        totalDepartments,
        totalStudents,
      },
    });

    res.status(201).json({ message: "Dashboard generated", dashboard });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get the latest dashboard snapshot
export const getLatestDashboard = async (req, res) => {
  try {
    const dashboard = await prisma.dashboard.findFirst({
      orderBy: { generatedAt: "desc" },
    });

    if (!dashboard) {
      return res.status(404).json({ message: "No dashboard data available" });
    }

    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get all dashboard snapshots (optional, for history)
export const getAllDashboards = async (req, res) => {
  try {
    const dashboards = await prisma.dashboard.findMany({
      orderBy: { generatedAt: "desc" },
    });

    res.json(dashboards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
