// src/modules/departments/department.controller.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 👉 Create Department
export const createDepartment = async (req, res) => {
  try {
    const { name, code } = req.body;

    const department = await prisma.department.create({
      data: { name, code },
    });

    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get all Departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await prisma.department.findMany({
      include: { teachers: true, courses: true },
    });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get Department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await prisma.department.findUnique({
      where: { id: parseInt(id) },
      include: { teachers: true, courses: true },
    });
    if (!department) return res.status(404).json({ error: "Department not found" });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Update Department
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const updated = await prisma.department.update({
      where: { id: parseInt(id) },
      data: { name, code },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👉 Delete Department
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.department.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
