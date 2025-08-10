"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const assignSchema = z.object({
  t_id: z.number(),
  courses: z
    .array(z.object({ course_id: z.string().min(1, "Course ID is required") }))
    .min(1, "At least one course is required"),
});

type AssignCoursesFormValues = z.infer<typeof assignSchema>;

export function AssignCoursesDialog({
  t_id,
  teacherName,
}: {
  t_id: number;
  teacherName: string;
}) {
  const form = useForm<AssignCoursesFormValues>({
    resolver: zodResolver(assignSchema),
    defaultValues: {
      t_id,
      courses: [{ course_id: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "courses",
  });

  async function onSubmit(values: AssignCoursesFormValues) {}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-full">Assign Courses</Button>
      </DialogTrigger>
      <DialogContent className="bg-bg">
        <DialogHeader>
          <DialogTitle>Assign Courses to {teacherName}</DialogTitle>
          <DialogDescription>
            Add one or more course IDs to assign to this teacher.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <input
              type="hidden"
              {...form.register("t_id", { valueAsNumber: true })}
            />

            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`courses.${index}.course_id`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course ID #{index + 1}</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          className="rounded-full bg-bg-main"
                          placeholder="Enter course ID"
                          {...field}
                        />
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => remove(index)}
                            className="rounded-full"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={() => append({ course_id: "" })}
              className="rounded-full"
            >
              + Add Another Course
            </Button>

            <Button type="submit" className="w-full rounded-full">
              Assign
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
