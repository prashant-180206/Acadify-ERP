import { Router } from "express";
import {
  createLoginSession,
  getAllSessions,
  getSessionsByTeacher,
  deleteSession,
} from "./loggedInTeacher.controller.js";

const router = Router();

router.post("/", createLoginSession);          // add session
router.get("/", getAllSessions);               // list all
router.get("/teacher/:teacherId", getSessionsByTeacher); // list by teacher
router.delete("/:id", deleteSession);          // end session

export default router;
