"use client";
import React, { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DepSummary, getDepSummaries } from "@/backend/departments";

const Marks = ({
  control,
  settab,
  trigger,
}: {
  control: Control<TeacherSchemaType>;
  settab: (str: string) => void;
  trigger: UseFormTrigger<TeacherSchemaType>;
}) => {
  const inputs: (keyof TeacherSchemaType)[] = [
    "University_name",
    "highestQualification",
    "designation",
    "department",
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

  const [depSummaries, setDepSummaries] = React.useState<DepSummary[]>([]);
  useEffect(() => {
    const func = async () =>
      await getDepSummaries().then((data) => {
        setDepSummaries(data);
      });
    func();
  }, []);

  return (
    <div className="f-row h-full w-full justify-evenly content-center gap-y-6 flex-wrap">
      {inputs.map((val, idx) => {
        if (val === "department") {
          return (
            <FormField
              key={idx}
              control={control}
              name={val}
              render={({ field }) => (
                <FormItem className="w-5/12">
                  <FormLabel className="text-main-dark">
                    Fill for {val}
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={String(field.value ?? 0)}
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
                      <SelectTrigger className="w-full bg-bg-main rounded-full text-main-dark p-5">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {depSummaries.map((state, i) => (
                          <SelectItem key={i} value={state.d_id.toString()}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
