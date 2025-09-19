// src/modules/auth/auth.routes.js
import { Router } from "express";
import { register, login } from "./auth.controller.js";
import { authMiddleware } from "../../../middleware/authMiddleware.js";

const router = Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route (optional, for testing / frontend profile page)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome!", user: req.user });
});

export default router;
