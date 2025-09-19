import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 👉 Mark attendance for a student in a course (via enrollmentId + date)
export const markAttendance = async (req, res) => {
  try {
    const { enrollmentId, date, present, remarks } = req.body;

    const attendance = await prisma.attendanceRecord.create({
      data: {
        enrollmentId,
        date: new Date(date),
        present,
        remarks,
      },
    });

    res.status(201).json({ message: "Attendance marked", attendance });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all attendance records
export const getAllAttendance = async (req, res) => {
  try {
    const records = await prisma.attendanceRecord.findMany({
      include: { enrollment: { include: { student: true, course: true } } },
    });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get attendance for a specific enrollment
export const getAttendanceByEnrollment = async (req, res) => {
  try {
    const { enrollmentId } = req.params;

    const records = await prisma.attendanceRecord.findMany({
      where: { enrollmentId: parseInt(enrollmentId) },
      orderBy: { date: "asc" },
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Update an attendance record
export const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { present, remarks } = req.body;

    const updated = await prisma.attendanceRecord.update({
      where: { id: parseInt(id) },
      data: { present, remarks },
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Delete an attendance record
export const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.attendanceRecord.delete({ where: { id: parseInt(id) } });

    res.json({ message: "Attendance record deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
