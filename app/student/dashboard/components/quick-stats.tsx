import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BookOpen, Clock, CalendarDays } from "lucide-react";

interface QuickStatsProps {
  overallAttendance: number;
  enrolledCourses: number;
  todayClasses: number;
  upcomingEvents: number;
}

const QuickStats: React.FC<QuickStatsProps> = ({
  overallAttendance,
  enrolledCourses,
  todayClasses,
  upcomingEvents,
}) => {
  const stats = [
    {
      label: "Overall Attendance",
      value: `${overallAttendance}%`,
      icon: TrendingUp,
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-200",
      textColor: "text-blue-100",
    },
    {
      label: "Enrolled Courses",
      value: enrolledCourses.toString(),
      icon: BookOpen,
      gradient: "from-green-500 to-green-600",
      iconColor: "text-green-200",
      textColor: "text-green-100",
    },
    {
      label: "Today's Classes",
      value: todayClasses.toString(),
      icon: Clock,
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-200",
      textColor: "text-purple-100",
    },
    {
      label: "Upcoming Events",
      value: upcomingEvents.toString(),
      icon: CalendarDays,
      gradient: "from-orange-500 to-orange-600",
      iconColor: "text-orange-200",
      textColor: "text-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className={`bg-gradient-to-br ${stat.gradient} text-white`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${stat.textColor} text-sm`}>{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.iconColor}`} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickStats;
