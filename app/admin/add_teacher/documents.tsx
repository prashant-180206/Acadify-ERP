"use client";
import React from "react";
import { camelToTitleCase, TeacherSchemaType } from "./schema";
import { Control, UseFormTrigger } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Documents = ({
  control,
  settab,
  trigger,
}: {
  control: Control<TeacherSchemaType>;
  settab: (str: string) => void;
  trigger: UseFormTrigger<TeacherSchemaType>;
}) => {
  const inputs: (keyof TeacherSchemaType)[] = [
    "aadhar",
    "pan",
    "bankName",
    "accountNo",
    "salary",
  ];
  return (
    <div className="f-row h-full w-full justify-evenly content-center gap-y-6 flex-wrap">
      {inputs.map((val, idx) => {
        if (val === "salary") {
          return (
            <FormField
              key={idx}
              control={control}
              name={val}
              render={({ field }) => (
                <FormItem className="w-5/12">
                  <FormLabel className="text-main-dark">
                    Fill for Salary
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder={`Enter ${camelToTitleCase(val)}`}
                      {...field}
                      value={field.value ?? ""} // Ensure controlled input
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === "" ? "" : Number(value));
                      }}
                      className="bg-bg-main rounded-full p-5 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        }
        return (
          <FormField
            key={idx}
            control={control}
            name={val}
            render={({ field }) => (
              <FormItem className="w-5/12">
                <FormLabel className="text-main-dark">
                  Fill for {camelToTitleCase(val)}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Enter ${camelToTitleCase(val)}`}
                    {...field}
                    className="bg-bg-main rounded-full p-5 w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}

      <div className="w-full f-row mt-10">
        <Button
          type="button"
          className="text-xl p-5 px-12 rounded-full f-row"
          onClick={async () => {
            if (await trigger(inputs)) {
              settab("Submit");
            }
          }}
        >
          Next{" "}
          <div>
            <ChevronRight />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Documents;
