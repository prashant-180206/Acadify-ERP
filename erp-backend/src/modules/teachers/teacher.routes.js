import { Router } from "express";
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  getTeacherCourses,
  getTeacherLogins
} from "./teacher.controller.js";

const router = Router();

// Basic CRUD
router.post("/", createTeacher);
router.get("/", getAllTeachers);
router.get("/:id", getTeacherById);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);

// Extra routes
router.get("/:id/courses", getTeacherCourses);
router.get("/:id/logins", getTeacherLogins);

export default router;
