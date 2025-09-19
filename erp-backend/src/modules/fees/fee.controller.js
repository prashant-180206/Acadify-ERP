import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 👉 Record a new fee payment
export const createFee = async (req, res) => {
  try {
    const { studentId, amount, method, reference } = req.body;

    const fee = await prisma.feePayment.create({
      data: {
        studentId,
        amount,
        method,
        reference,
      },
    });

    res.status(201).json({ message: "Fee payment recorded", fee });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all fee payments
export const getAllFees = async (req, res) => {
  try {
    const fees = await prisma.feePayment.findMany({
      include: { student: true },
    });
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get all payments of a single student
export const getFeesByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const fees = await prisma.feePayment.findMany({
      where: { studentId: parseInt(studentId) },
      orderBy: { paidOn: "desc" },
    });
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Update a fee record (e.g., fix method or reference)
export const updateFee = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, method, reference } = req.body;

    const updated = await prisma.feePayment.update({
      where: { id: parseInt(id) },
      data: { amount, method, reference },
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Delete a fee record
export const deleteFee = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.feePayment.delete({ where: { id: parseInt(id) } });

    res.json({ message: "Fee payment deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
