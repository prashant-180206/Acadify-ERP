import app from "./app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
import authRoutes from "./modules/auth/auth.routes.js";

app.use("/api/auth", authRoutes);
import studentRoutes from "./modules/student/student.routes.js";
app.use("/api/students", studentRoutes);
import courseRoutes from "./modules/courses/course.routes.js";

app.use("/api/courses", courseRoutes);
import departmentRoutes from "./modules/departments/department.routes.js";

app.use("/api/departments", departmentRoutes);
import teacherRoutes from "./modules/teachers/teacher.routes.js";

app.use("/api/teachers", teacherRoutes);
import userRoutes from "./modules/user/user.routes.js";

app.use("/api/users", userRoutes);
import enrollmentRoutes from "./modules/enrollments/enrollment.routes.js";

app.use("/api/enrollments", enrollmentRoutes);
import attendanceRoutes from "./modules/attendance/attendance.routes.js";

app.use("/api/attendance", attendanceRoutes);
import feeRoutes from "./modules/fees/fee.routes.js";

app.use("/api/fees", feeRoutes);
import loggedInTeacherRoutes from "./modules/loggedInTeacher/loggedInTeacher.routes.js";

app.use("/api/logins", loggedInTeacherRoutes);
import loggedInStudentRoutes from "./modules/loggedInStudent/loggedInStudent.routes.js";

app.use("/api/student-logins", loggedInStudentRoutes);
import dashboardRoutes from "./modules/dashboard/dashboard.routes.js";

app.use("/api/dashboard", dashboardRoutes);
