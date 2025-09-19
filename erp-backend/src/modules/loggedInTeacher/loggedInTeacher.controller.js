import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 👉 Add a new logged-in session for a teacher
export const createLoginSession = async (req, res) => {
  try {
    const { teacherId, token, expiresAt } = req.body;

    const session = await prisma.loggedInTeacher.create({
      data: {
        teacherId,
        token,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    });

    res.status(201).json({ message: "Login session created", session });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all login sessions
export const getAllSessions = async (req, res) => {
  try {
    const sessions = await prisma.loggedInTeacher.findMany({
      include: { teacher: true },
    });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get sessions for a specific teacher
export const getSessionsByTeacher = async (req, res) => {
  try {
    const { teacherId } = req.params;

    const sessions = await prisma.loggedInTeacher.findMany({
      where: { teacherId: parseInt(teacherId) },
      include: { teacher: true },
    });

    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Delete (end) a session
export const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.loggedInTeacher.delete({ where: { id: parseInt(id) } });

    res.json({ message: "Session ended" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
