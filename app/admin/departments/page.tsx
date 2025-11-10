import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  Laptop,
  Zap,
  Cog,
  Building2,
  Radio,
  Briefcase,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AddDepartment from "./adddepdialog";
import Link from "next/link";
import { getDepartments } from "@/backend/departments";

const page = async () => {
  const departments = await getDepartments();

  function getDepartmentIcon(name: string) {
    const lower = name.toLowerCase();
    if (lower.includes("computer"))
      return <Laptop className="w-6 h-6 text-blue-500" />;
    if (lower.includes("electrical"))
      return <Zap className="w-6 h-6 text-yellow-500" />;
    if (lower.includes("mechanical"))
      return <Cog className="w-6 h-6 text-gray-500" />;
    if (lower.includes("civil"))
      return <Building2 className="w-6 h-6 text-green-500" />;
    if (lower.includes("electronics"))
      return <Radio className="w-6 h-6 text-pink-500" />;
    return <Briefcase className="w-6 h-6 text-purple-500" />; // fallback icon
  }

  return (
    <main className="bgbg">
      <h1 className="w-full font-semibold text-main-dark text-2xl text-center p-6">
        Departments
      </h1>
      <section className="grid grid-cols-3 gap-6 px-6 pb-10 justify-items-stretch gap-y-6 flex-wrap border-none">
        {departments.map((val, idx) => {
          return (
            <Card className="" key={idx}>
              <CardHeader className="">
                <CardTitle className=" f-row justify-start gap-4">
                  {getDepartmentIcon(val.name)}{" "}
                  <p className="text-txt text-xl font-semibold">{val.name}</p>
                </CardTitle>
                <CardDescription className="text-txt-muted">
                  Department id : {val.d_id}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-txt">HOD Id : {val.hodid}</p>
                <p className="text-txt">Email : {val.email}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/admin/departments/${val.d_id}`}>
                  <Button className="rounded-full">See Courses</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
        <Card className="f-row">
          <CardContent className="f-col">
            <Plus size={100} className="text-txt" />
            <CardAction className="">
              <AddDepartment />
            </CardAction>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default page;
