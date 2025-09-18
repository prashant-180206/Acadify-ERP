import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ERP backend is running ✅");
});
import authRoutes from "./modules/auth/auth.routes.js";
app.use("/api/auth", authRoutes);
export default app;
