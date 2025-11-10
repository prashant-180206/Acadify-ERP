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
import { addUser } from "@/backend/authfuncs";
import { useRouter } from "next/navigation";

// Validation schema
const formSchema = z.object({
  email: z.string().min(1, "Email is required"),
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
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const { error } = await addUser(values.email, values.password, role);
      if (error) {
        alert("Error: " + error.message);
        return;
      }
      router.push(
        `${
          role.toLowerCase() === "admin"
            ? "/admin/departments"
            : role.toLowerCase() + "/dashboard"
        }`
      );
    } catch (err) {
      console.error("Error during login:", err);
    }
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-main-dark">
                    Enter Email Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Email Address"
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
