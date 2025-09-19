import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

// 👉 Register new user
export const register = async (req, res) => {
  try {
    const { username, email, password, role, extraData } = req.body;

    // ✅ 1. Validate role
    if (!Object.values(Role).includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // ✅ 2. Hash password
    const hashed = await bcrypt.hash(password, 10);

    // ✅ 3. Prepare base user
    const userData = {
      username,
      email,
      password: hashed,
      role,
    };

    // ✅ 4. If role is STUDENT → create Student profile
    if (role === "STUDENT") {
      const student = await prisma.student.create({
        data: {
          rollNo: extraData.rollNo,
          program: extraData.program || null,
          year: extraData.year || 1,
        },
      });
      userData.studentId = student.id;
    }

    // ✅ 5. If role is FACULTY → create Teacher profile
    if (role === "FACULTY") {
      const teacher = await prisma.teacher.create({
        data: {
          fullName: extraData.fullName,
          phone: extraData.phone || null,
          departmentId: extraData.departmentId,
        },
      });
      userData.teacherId = teacher.id;
    }

    // ✅ 6. Create user in DB
    const user = await prisma.user.create({ data: userData });

    // ✅ 7. Create token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Login existing user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    // ✅ 2. Compare password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid email or password" });

    // ✅ 3. Generate token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      message: "Login successful",
      user: { id: user.id, username: user.username, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
