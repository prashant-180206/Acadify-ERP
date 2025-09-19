import { Router } from "express";
import {
  generateDashboard,
  getLatestDashboard,
  getAllDashboards,
} from "./dashboard.controller.js";

const router = Router();

router.post("/generate", generateDashboard); // take snapshot
router.get("/latest", getLatestDashboard);   // get latest one
router.get("/", getAllDashboards);           // list history

export default router;
