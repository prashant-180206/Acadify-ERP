import app from "./app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
import studentRoutes from "./modules/student/student.routes.js";
app.use("/api/students", studentRoutes);
import courseRoutes from "./modules/courses/course.routes.js";

app.use("/api/courses", courseRoutes);
import departmentRoutes from "./modules/departments/department.routes.js";

app.use("/api/departments", departmentRoutes);
import teacherRoutes from "./modules/teachers/teacher.routes.js";

app.use("/api/teachers", teacherRoutes);
