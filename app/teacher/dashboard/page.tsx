import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CircularLoader } from "@/components/chartradial";
import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  Users,
  TrendingUp,
  Bell,
  CheckCircle2,
} from "lucide-react";
import { loggedInTeacher } from "@/backend/authfuncs";
import { getTeacherDashboardData } from "@/backend/dashboard";

const Page = async () => {
  const teacherInfo = await loggedInTeacher();

  if (!teacherInfo) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="p-8">
          <CardContent>
            <p className="text-lg text-center">
              Please log in to view dashboard
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  let dashboardData;

  try {
    dashboardData = await getTeacherDashboardData(teacherInfo.id || 0);
  } catch (error) {
    console.error("Error loading teacher dashboard data:", error);
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="p-8">
          <CardContent>
            <p className="text-lg text-center text-red-500">
              Error loading dashboard data. Please try refreshing the page.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <main className="min-h-screen bg-bg p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-main text-white font-bold text-lg">
                {getInitials(dashboardData.teacher_info.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-txt">
                Welcome, {dashboardData.teacher_info.name}
              </h1>
              <p className="text-muted-foreground">
                {dashboardData.teacher_info.designation} •{" "}
                {dashboardData.teacher_info.department}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">ID: {dashboardData.teacher_info.id}</Badge>
            <Badge variant="secondary">
              {dashboardData.teacher_info.qualification}
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Courses Teaching</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.class_statistics.courses_teaching}
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Students</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.class_statistics.total_students}
                  </p>
                </div>
                <Users className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Today's Classes</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.today_lectures.length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Avg Attendance</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.class_statistics.average_attendance}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Today's Lectures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardData.today_lectures.length > 0 ? (
                  dashboardData.today_lectures.map((lecture, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-bg-dark border-l-4 border-main"
                    >
                      <h4 className="font-medium text-txt">
                        {lecture.course_name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {lecture.time_slot}
                      </p>
                      <p className="text-sm text-blue-400">
                        {lecture.division}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No lectures scheduled for today
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Attendance Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Recent Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.recent_attendance.map((attendance, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-bg-dark"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-txt">
                        {attendance.course_name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {attendance.division} •{" "}
                        {new Date(attendance.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <p className="text-sm font-medium">
                          {attendance.present_count}/{attendance.total_count}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {Math.round(
                            (attendance.present_count /
                              attendance.total_count) *
                              100
                          )}
                          %
                        </p>
                      </div>
                      <div className="w-16 h-16">
                        <CircularLoader
                          currentVal={attendance.present_count}
                          totalVal={attendance.total_count}
                          size={60}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Teaching Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Teaching Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardData.teaching_courses.map((course, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-bg-dark border border-gray-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-txt truncate">
                          {course.course_name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Credits: {course.credits}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline" className="text-xs">
                          Sem {course.semester}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          {course.student_count} students
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardData.upcoming_deadlines.map((deadline, index) => {
                  const deadlineColors = {
                    assignment: "bg-blue-100 text-blue-800",
                    exam: "bg-red-100 text-red-800",
                    deadline: "bg-yellow-100 text-yellow-800",
                  };

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-bg-dark"
                    >
                      <div>
                        <h4 className="font-medium text-txt">
                          {deadline.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {deadline.course}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Due:{" "}
                          {new Date(deadline.due_date).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className={deadlineColors[deadline.type]}>
                        {deadline.type}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Page;
