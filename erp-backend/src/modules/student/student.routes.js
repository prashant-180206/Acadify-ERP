import { Router } from "express";
import { getStudents, getStudentByRollNo, addStudent } from "./student.controller.js";

const router = Router();

router.get("/", getStudents);            // GET all
router.get("/:rollNo", getStudentByRollNo); // GET one
router.post("/", addStudent);            // Add

export default router;
