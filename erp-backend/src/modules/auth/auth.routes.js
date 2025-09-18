import { Router } from "express";
import { register, login } from "./auth.controller.js";
import { authMiddleware } from "../../../middleware/authMiddleware.js";

const router = Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Example protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome!", user: req.user });
});

export default router;
