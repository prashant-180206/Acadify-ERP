import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 👉 Add a new logged-in session for a student
export const createLoginSession = async (req, res) => {
  try {
    const { studentId, token, expiresAt } = req.body;

    const session = await prisma.loggedInStudent.create({
      data: {
        studentId,
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
    const sessions = await prisma.loggedInStudent.findMany({
      include: { student: true },
    });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get sessions for a specific student
export const getSessionsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const sessions = await prisma.loggedInStudent.findMany({
      where: { studentId: parseInt(studentId) },
      include: { student: true },
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

    await prisma.loggedInStudent.delete({ where: { id: parseInt(id) } });

    res.json({ message: "Session ended" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
