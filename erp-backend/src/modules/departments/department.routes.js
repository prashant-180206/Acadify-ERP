// src/modules/departments/department.routes.js
import { Router } from "express";
import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "./department.controller.js";
import { authMiddleware as protect } from "../../../middleware/authMiddleware.js";

const router = Router();

router.post("/", protect, createDepartment);      // Add
router.get("/", protect, getDepartments);         // List all
router.get("/:id", protect, getDepartmentById);   // Get by ID
router.put("/:id", protect, updateDepartment);    // Update
router.delete("/:id", protect, deleteDepartment); // Delete

export default router;
