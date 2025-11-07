"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addDepartment } from "@/backend/departments";

// Validation schema
const formSchema = z.object({
  departmentId: z.string().min(1, "Department ID is required"),
  departmentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  hod: z.string().min(1, "HOD Id is important"),
});

// Fields configuration
const fields = [
  {
    name: "departmentId",
    label: "Department ID",
    placeholder: "Enter Department ID",
  },
  {
    name: "departmentName",
    label: "Department Name",
    placeholder: "Enter Department Name",
  },
  {
    name: "hod",
    label: "HOD Id",
    placeholder: "Enter HOD Id",
  },
  {
    name: "email",
    label: "Department Email",
    placeholder: "Enter Email",
    type: "email",
  },
] as const;

export default function AddDepartment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departmentId: "",
      departmentName: "",
      email: "",
      hod: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Department credentials:", values);
    addDepartment({
      d_id: parseInt(values.departmentId, 10),
      name: values.departmentName,
      hodid: parseInt(values.hod, 10),
      email: values.email,
    });
    form.reset();
    alert("Department Added Successfully!");
    console.log("Department added");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">Add Department</Button>
      </DialogTrigger>

      <DialogContent className="bg-bg-dark p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Add Department Credentials
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {fields.map((val, idx) => (
              <FormField
                key={idx}
                control={form.control}
                name={val.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{val.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={val.placeholder}
                        {...field}
                        className="bg-bg-main rounded-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <div className="flex justify-between pt-2">
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-red-400 text-txt-light hover:bg-red-500 rounded-full"
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                className="bg-green-400  hover:bg-green-500 text-txt-light rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
