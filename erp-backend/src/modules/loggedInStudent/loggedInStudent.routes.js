import { Router } from "express";
import {
  createLoginSession,
  getAllSessions,
  getSessionsByStudent,
  deleteSession,
} from "./loggedInStudent.controller.js";

const router = Router();

router.post("/", createLoginSession);                 // add session
router.get("/", getAllSessions);                      // list all
router.get("/student/:studentId", getSessionsByStudent); // list by student
router.delete("/:id", deleteSession);                 // end session

export default router;
