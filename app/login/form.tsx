"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

// Validation schema
const formSchema = z.object({
  prn: z.string().min(1, "PRN is required"),
  password: z.string().min(1, "Password is required"),
});

export default function StudentLoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [role, setRole] = React.useState<"Student" | "Teacher" | "Admin">(
    "Student"
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prn: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center w-2/6 min-w-80">
      <div className="w-full p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-main-dark mb-10">
          {role} Login
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* PRN Number */}
            <FormField
              control={form.control}
              name="prn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-main-dark">
                    Enter PRN Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter PRN Number"
                      {...field}
                      className="bg-bg-main rounded-full p-5 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-main-dark">
                    Enter Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        {...field}
                        className="bg-bg-main rounded-full pr-10 p-5 "
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-2.5 text-purple-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Links */}
            <div className="flex justify-between text-sm text-main-dark font-medium">
              <button
                className="hover:underline"
                onClick={() => setRole("Admin")}
              >
                Admin Login
              </button>
              <button
                className="hover:underline"
                onClick={() => setRole("Teacher")}
              >
                Teacher Login
              </button>
            </div>

            {/* Submit Button */}
            <div className="w-full f-row">
              <Button
                type="submit"
                className="p-5 px-8 bg-main hover:bg-main-dark text-xl rounded-full mt-10"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
