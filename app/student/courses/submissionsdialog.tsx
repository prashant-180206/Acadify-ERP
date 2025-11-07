"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {
  assignmentId: string | number;
  assignmentTitle?: string;
  dueDate?: string; // e.g., "2025-05-17"
  instructions?: string;
};

type FormData = {
  note: string;
  file: FileList;
};

const AssignmentSubmissionDialog: React.FC<Props> = ({
  assignmentId,
  assignmentTitle = "Assignment",
  dueDate,
  instructions = "Submit in PDF",
}) => {
  const form = useForm<FormData>();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const formattedDate =
    mounted && dueDate ? new Date(dueDate).toLocaleDateString() : dueDate;

  const onSubmit = (data: FormData) => {
    if (!data.file || data.file.length === 0) {
      alert("Please select a PDF file to submit!");
      return;
    }

    const file = data.file[0];
    if (file.type !== "application/pdf") {
      alert("Only PDF files allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("assignmentId", assignmentId.toString());
    formData.append("note", data.note);
    formData.append("file", file);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full px-6">Add Submission</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-bg-main p-0">
        <Card className="bg-indigo-50/70 rounded-2xl shadow-none border-none">
          <CardHeader>
            <DialogHeader>
              <DialogTitle className="bg-bg-dark rounded-xl px-6 py-2 text-xl font-semibold">
                {assignmentTitle}
              </DialogTitle>
              {dueDate && (
                <DialogDescription className="text-sm text-black/60 mt-2 px-1">
                  {formattedDate}
                </DialogDescription>
              )}
            </DialogHeader>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="flex flex-col gap-3"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={3}
                          placeholder={instructions}
                          className="bg-bg-dark rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium mt-1">
                        Upload PDF
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          className="bg-bg-dark rounded-lg"
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <input type="hidden" name="assignmentId" value={assignmentId} />
                <div className="flex gap-4 mt-4 justify-center">
                  <Button
                    type="submit"
                    className="rounded-full px-8 bg-cyan-400 hover:bg-cyan-500"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentSubmissionDialog;
