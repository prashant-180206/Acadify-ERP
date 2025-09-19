import { Router } from "express";
import {
  createFee,
  getAllFees,
  getFeesByStudent,
  updateFee,
  deleteFee,
} from "./fee.controller.js";

const router = Router();

router.post("/", createFee); // record payment
router.get("/", getAllFees); // list all
router.get("/student/:studentId", getFeesByStudent); // list by student
router.put("/:id", updateFee); // update record
router.delete("/:id", deleteFee); // delete record

export default router;
