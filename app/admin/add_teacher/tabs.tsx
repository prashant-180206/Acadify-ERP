"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import PersonalDetails from "./personaldetails";
import Contact_Details from "./contact";
import Marks from "./marks";
import Documents from "./documents";
import Submit from "./submit";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { defValues, TeacherSchema, TeacherSchemaType } from "./schema";
import { addTeacher } from "@/backend/addfuncs";

const TabsSection = () => {
  const [activeTab, setActiveTab] = React.useState<
    | "Personal Details"
    | "Contact Details"
    | "Qualifications"
    | "Documents"
    | "Submit"
  >("Personal Details");

  const form = useForm<TeacherSchemaType>({
    resolver: zodResolver(TeacherSchema),
    defaultValues: defValues as TeacherSchemaType,
  });

  function onSubmit(values: TeacherSchemaType) {
    console.log(values);
    addTeacher(values);
    form.reset();
    alert("Teacher Added Successfully");
    setActiveTab("Personal Details");
  }

  const tabs = [
    {
      label: "Personal Details",
      component: (
        <PersonalDetails
          control={form.control}
          settab={setActiveTab as (str: string) => void}
          trigger={form.trigger}
        />
      ),
    },
    {
      label: "Contact Details",
      component: (
        <Contact_Details
          control={form.control}
          settab={setActiveTab as (str: string) => void}
          trigger={form.trigger}
        />
      ),
    },
    {
      label: "Qualifications",
      component: (
        <Marks
          control={form.control}
          settab={setActiveTab as (str: string) => void}
          trigger={form.trigger}
        />
      ),
    },
    {
      label: "Documents",
      component: (
        <Documents
          control={form.control}
          settab={setActiveTab as (str: string) => void}
          trigger={form.trigger}
        />
      ),
    },
    {
      label: "Submit",
      component: (
        <Submit
          control={form.control}
          handleSubmit={form.handleSubmit}
          onSubmit={onSubmit as () => void}
          getValues={form.getValues}
        />
      ),
    },
  ];

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab as (str: string) => void}
      className="flex-1 f-row justify-evenly py-10 h-[75vh]"
    >
      <TabsList className="f-col items-start justify-start bg-main-light p-10 pt-16 rounded-xl h-full">
        {tabs.map((val, idx) => (
          <div className="f-row gap-4" key={idx}>
            <div className="w-4 h-4 bg-bg rounded-full"></div>
            <TabsTrigger
              value={val.label}
              className="f-row text-xl font-semibold text-txt gap-4 rounded-full p-2 px-4 data-[state=active]:bg-bg"
            >
              {val.label}
            </TabsTrigger>
          </div>
        ))}
      </TabsList>

      {tabs.map((val, idx) => (
        <TabsContent
          value={val.label}
          key={idx}
          className="f-col bg-bg-dark rounded-xl h-full w-7/12 overflow-auto"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full h-full "
            >
              {val.component}
            </form>
          </Form>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsSection;
