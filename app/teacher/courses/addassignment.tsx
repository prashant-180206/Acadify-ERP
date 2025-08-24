"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ------------------
// 1. Zod Schema
// ------------------
const formSchema = z.object({
  assignmentName: z.string().min(1, "Name is required"),
  dueDate: z.string().min(1, "Due date is required"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ------------------
// 2. Fields Array
// ------------------
const fields: {
  name: keyof FormData;
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}[] = [
  {
    name: "assignmentName",
    label: "Assignment Name",
    placeholder: "Assignment 1",
  },
  { name: "dueDate", label: "Due Date", type: "date" },
  {
    name: "description",
    label: "Description",
    textarea: true,
    placeholder: "Add details...",
  },
];

// ------------------
// 3. Component
// ------------------
export default function AssignmentFormDialog() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assignmentName: "",
      dueDate: "",
      description: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
          Add Assignment +
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-bg text-sm rounded-2xl p-6 sm:max-w-md overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-txt text-xl text-center">
            Add Assignment
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      {field.textarea ? (
                        <Textarea
                          placeholder={field.placeholder}
                          {...formField}
                          className="resize-none bg-bg-main rounded-xl"
                        />
                      ) : (
                        <Input
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          {...formField}
                          className="bg-bg-main rounded-full"
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <DialogFooter>
              <Button
                type="submit"
                className="rounded-full bg-cyan-400 text-white"
              >
                Confirm
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
