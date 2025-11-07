import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type CourseCardProps = {
  course_name: string;
  credits: number;
  num_lectures: number;
  semester: number;
};

export function CourseCard({
  course_name,
  credits,
  num_lectures,
  semester,
}: CourseCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg min-w-60 h-55 transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{course_name}</CardTitle>
        <CardDescription>Semester {semester}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Credits: <span className="font-medium">{credits}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Lectures per week:{" "}
            <span className="font-medium">{num_lectures}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
