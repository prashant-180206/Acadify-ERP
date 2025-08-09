"use client";
import React, { useState } from "react";
import { camelToTitleCase, StudentSchemaType } from "./schema";
import { Control } from "react-hook-form";
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

const Marks = ({
  control,
  settab,
  trigger,
}: {
  control: Control<StudentSchemaType>;
  settab: (str: string) => void;
  trigger: any;
}) => {
  const inputs: (keyof StudentSchemaType)[] = [
    "University_name",
    "highestQualification",
  ];
  const otherinputs = ["Qualification Score", "University Location"];

  // State object to hold values for otherinputs fields
  const [otherValues, setOtherValues] = useState<Record<string, string>>(
    otherinputs.reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  // Handler to update state for otherinputs fields
  const handleOtherChange = (key: string, value: string) => {
    setOtherValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="f-row h-full w-full justify-evenly content-center gap-y-6 flex-wrap">
      {inputs.map((val, idx) => (
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
      ))}

      {otherinputs.map((val, idx) => (
        <div className="w-5/12" key={idx}>
          <FormItem className="w-full">
            <FormLabel className="text-main-dark">
              Fill for {camelToTitleCase(val)}
            </FormLabel>
            <FormControl>
              <Input
                placeholder={`Enter ${camelToTitleCase(val)}`}
                value={otherValues[val]}
                onChange={(e) => handleOtherChange(val, e.target.value)}
                className="bg-bg-main rounded-full p-5 w-full"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
      ))}
      <div className="w-full f-row mt-10">
        <Button
          type="button"
          className="text-xl p-5 px-12 rounded-full f-row"
          onClick={async () => {
            if (await trigger(inputs)) {
              settab("Documents");
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

export default Marks;
