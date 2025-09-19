import { Router } from "express";
import {
  markAttendance,
  getAllAttendance,
  getAttendanceByEnrollment,
  updateAttendance,
  deleteAttendance,
} from "./attendance.controller.js";

const router = Router();

// CRUD routes
router.post("/", markAttendance); // mark attendance
router.get("/", getAllAttendance); // list all
router.get("/enrollment/:enrollmentId", getAttendanceByEnrollment); // get per enrollment
router.put("/:id", updateAttendance); // update record
router.delete("/:id", deleteAttendance); // delete record

export default router;
