import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, BookOpen, Clock, TrendingUp } from "lucide-react";
import { loggedInStudent } from "@/backend/authfuncs";
import { getStudentDashboardData } from "@/backend/dashboard";

const DashBoard = async () => {
  const studentData = await loggedInStudent();

  if (!studentData) {
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

  const fullName =
    [studentData.firstName, studentData.lastName].filter(Boolean).join(" ") ||
    "Student";

  let dashboardData;

  try {
    dashboardData = await getStudentDashboardData(
      studentData.rollNo || 1,
      studentData.dep_id || 101,
      studentData.semester || 1,
      studentData.class || "CS-K",
      fullName
    );
  } catch (error) {
    console.error("Error loading dashboard data:", error);
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
                {getInitials(dashboardData.student_info.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-txt">
                Welcome, {dashboardData.student_info.name}
              </h1>
              <p className="text-muted-foreground">
                {dashboardData.student_info.class} • Semester{" "}
                {dashboardData.student_info.semester}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">
              Roll No: {dashboardData.student_info.rollNo}
            </Badge>
            <Badge variant="secondary">
              {dashboardData.student_info.department}
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Overall Attendance</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.attendance_summary.overall_percentage}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Enrolled Courses</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.enrolled_courses.length}
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Today's Classes</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.today_schedule.length}
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
                  <p className="text-orange-100 text-sm">Upcoming Events</p>
                  <p className="text-2xl font-bold">
                    {dashboardData.upcoming_events.length}
                  </p>
                </div>
                <CalendarDays className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Attendance Summary */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Attendance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.attendance_summary.courses.map(
                  (course, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-bg-dark"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-txt">
                          {course.course_name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {course.lectures_attended}/{course.total_lectures}{" "}
                          lectures
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress
                          value={course.attendance_percentage}
                          className="w-20"
                        />
                        <span className="text-sm font-medium min-w-[3rem]">
                          {course.attendance_percentage}%
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardData.today_schedule.length > 0 ? (
                  dashboardData.today_schedule.map((schedule, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-bg-dark border-l-4 border-main"
                    >
                      <h4 className="font-medium text-txt">
                        {schedule.course_name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {schedule.time_slot}
                      </p>
                      <p className="text-sm text-blue-400">
                        {schedule.instructor}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No classes scheduled for today
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enrolled Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Enrolled Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dashboardData.enrolled_courses.map((course, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-bg-dark border border-gray-200"
                  >
                    <h4 className="font-medium text-txt truncate">
                      {course.course_name}
                    </h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">
                        Credits: {course.credits}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        Sem {course.semester}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardData.upcoming_events.map((event, index) => {
                  const eventColors = {
                    assignment: "bg-blue-100 text-blue-800",
                    exam: "bg-red-100 text-red-800",
                    event: "bg-green-100 text-green-800",
                  };

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-bg-dark"
                    >
                      <div>
                        <h4 className="font-medium text-txt">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className={eventColors[event.type]}>
                        {event.type}
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

export default DashBoard;
