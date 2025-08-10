import React from "react";
import { Control } from "react-hook-form";
import { camelToTitleCase, indianStates, StudentSchemaType } from "./schema";
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

const Contact_Details = ({
  control,
  settab,
  trigger,
}: {
  control: Control<StudentSchemaType>;
  settab: (str: string) => void;
  trigger: any;
}) => {
  const inputs: (keyof StudentSchemaType)[] = [
    "contactNo",
    "email",
    "address",
    "state",
    "city",
    "pin",
  ];
  return (
    <div className="f-row h-full w-full justify-evenly content-center gap-y-6 flex-wrap">
      {inputs.map((val, idx) => {
        if (val == "state") {
          return (
            <FormField
              key={idx}
              control={control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-5/12">
                  <FormLabel className="text-main-dark">
                    Fill for State
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ?? ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full bg-bg-main rounded-full text-main-dark p-5">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStates.map((state, i) => (
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

      <div className="w-full f-row mt-10">
        <Button
          type="button"
          className="text-xl p-5 px-12 rounded-full f-row"
          onClick={async () => {
            if (await trigger(inputs)) {
              settab("Qualifications");
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

export default Contact_Details;
