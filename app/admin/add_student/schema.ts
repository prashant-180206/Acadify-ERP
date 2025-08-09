import { z } from "zod";

export const StudentSchema = z.object({
  firstName: z.string().min(1, "FirstName is required"),
  lastName: z.string().min(1, "lastName is required"),
  fatherName: z.string().min(1, "fatherName is required"),
  motherName: z.string().min(1, "motherName is required"),
  dateOfBirth: z.string().min(6, "DOB is Required"),
  gender: z.enum(["male", "female"]),
  contactNo: z.string().length(10, "Enter Valid Phone"),
  email: z.email().min(1, "email is required"),
  state: z.string().min(1, "state is required"),
  address: z.string().min(1, "address is required"),
  city: z.string().min(1, "city is required"),
  pin: z.string().length(6, "Enter Valid Pin"),
  HSC_score: z.string().min(1, "HSC_score is required"),
  CET_Score: z.string().min(1, "CET_Score is required"),
  aadhar: z.string().min(16, "aadhar is required"),
  pan: z.string().min(1, "pan is required"),
  category: z.string().min(1, "Select a Category"),
});

export type StudentSchemaType = z.infer<typeof StudentSchema>;

export const defValues = {
  firstName: "",
  lastName: "",
  fatherName: "",
  motherName: "",
  dateOfBirth: "", // or new Date() if you want today's date
  gender: "male", // or "male"/"female" if you want a pre-selected value
  contactNo: "",
  email: "",
  state: "",
  address: "",
  city: "",
  pin: "",
  HSC_score: "",
  CET_Score: "",
  aadhar: "",
  pan: "",
  category: "",
};

export function camelToTitleCase(text: string): string {
  return (
    text
      // Replace underscores with spaces
      .replace(/_/g, " ")
      // Insert space before a capital letter that's followed by lowercase (keeps acronyms intact)
      .replace(/([a-z])([A-Z][a-z])/g, "$1 $2")
      // Insert space between a lowercase and capital OR between two capitals when the second is lowercase
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Capitalize first letter of each word unless it's an acronym
      .split(" ")
      .map((word) =>
        word === word.toUpperCase()
          ? word // keep acronyms uppercase
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ")
      .trim()
  );
}

export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
