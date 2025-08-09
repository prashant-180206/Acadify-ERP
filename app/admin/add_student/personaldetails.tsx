import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { camelToTitleCase, StudentSchemaType } from "./schema";
import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/datepicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PersonalDetails = ({
  control,
  settab,
  trigger,
}: {
  control: Control<StudentSchemaType>;
  settab: (str: string) => void;
  trigger: any;
}) => {
  const inputs: (keyof StudentSchemaType)[] = [
    "firstName",
    "lastName",
    "fatherName",
    "motherName",
    "dateOfBirth",
    "gender",
  ];

  return (
    <div className="f-row h-full w-full justify-evenly content-center gap-y-6 flex-wrap">
      {inputs.map((val, idx) => {
        if (val === "dateOfBirth") {
          return (
            <div className="w-5/12" key={idx}>
              <FormField
                control={control}
                name="dateOfBirth"
                render={({ field }) => (
                  <>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      label="Date of Birth"
                    />
                    <FormMessage /> {/* <== Move here */}
                  </>
                )}
              />
            </div>
          );
        }

        if (val === "gender") {
          return (
            <FormField
              key={idx}
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3 w-5/12">
                  <FormLabel className="text-main-dark">Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl className="bg-bg">
                          <RadioGroupItem id="gender-male" value="male" />
                        </FormControl>
                        <FormLabel
                          htmlFor="gender-male"
                          className="text-main-dark"
                        >
                          Male
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-2">
                        <FormControl className="bg-bg">
                          <RadioGroupItem id="gender-female" value="female" />
                        </FormControl>
                        <FormLabel
                          htmlFor="gender-female"
                          className="text-main-dark"
                        >
                          Female
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
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
              settab("Contact Details");
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

export default PersonalDetails;
