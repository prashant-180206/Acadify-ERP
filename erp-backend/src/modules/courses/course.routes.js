// src/modules/courses/course.routes.js
import { Router } from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "./course.controller.js";
import { authMiddleware as protect} from "../../../middleware/authMiddleware.js"; // if auth required

const router = Router();

// Routes
router.post("/", protect, createCourse);   // Add new course
router.get("/", protect, getCourses);      // Get all courses
router.get("/:id", protect, getCourseById); // Get course by ID
router.put("/:id", protect, updateCourse);  // Update
router.delete("/:id", protect, deleteCourse); // Delete

export default router;

//need to check in postman after everything
