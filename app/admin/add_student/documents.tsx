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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Documents = ({
  control,
  settab,
  trigger,
}: {
  control: Control<StudentSchemaType>;
  settab: (str: string) => void;
  trigger: any;
}) => {
  const inputs: (keyof StudentSchemaType)[] = ["aadhar", "pan", "category"];
  const otherinputs = ["Category Certificate id"];

  // State object to hold value for otherinputs field
  const [catid, setcatid] = useState<string>("");

  return (
    <div className="f-row h-full w-full justify-evenly content-center gap-y-6 flex-wrap">
      {inputs.map((val, idx) => {
        if (val === "category") {
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
                      value={field.value ?? ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full bg-bg-main rounded-full text-main-dark p-5">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {["OBC", "Open", "SC", "ST", "EWS"].map((state, i) => (
                          <SelectItem key={i} value={state}>
                            {state}
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
                value={catid}
                onChange={(e) => setcatid(e.target.value)}
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
