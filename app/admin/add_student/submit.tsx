import React from "react";
import { StudentSchemaType } from "./schema";
import {
  UseFormGetValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Submit = ({
  handleSubmit,
  onSubmit,
  getValues,
}: {
  handleSubmit: UseFormHandleSubmit<StudentSchemaType>;
  onSubmit: SubmitHandler<StudentSchemaType>;
  getValues: UseFormGetValues<StudentSchemaType>;
}) => {
  const allvalues = getValues();
  const entries = Object.entries(allvalues);

  // Split entries into chunks of 2 pairs (4 cells: field1, val1, field2, val2)
  const chunkedEntries: [string, string][][] = [];
  for (let i = 0; i < entries.length; i += 2) {
    chunkedEntries.push(entries.slice(i, i + 2) as [string, string][]);
  }

  return (
    <div className="overflow-auto w-full h-full rounded-md p-4">
      <Table className="min-w-full border-collapse">
        <TableHeader>
          <TableRow>
            <TableHead className="border-b border-r border-gray-300">
              Field
            </TableHead>
            <TableHead className="border-b border-r border-gray-300">
              Value
            </TableHead>
            <TableHead className="border-b border-r border-gray-300">
              Field
            </TableHead>
            <TableHead className="border-b border-gray-300">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chunkedEntries.map((pair, idx) => (
            <TableRow key={idx}>
              {/* First pair */}
              <TableCell className="border-b border-r border-gray-300 font-medium">
                {pair[0][0]}
              </TableCell>
              <TableCell className="border-b border-r border-gray-300">
                {typeof pair[0][1] === "object" && pair[0][1] !== null
                  ? JSON.stringify(pair[0][1])
                  : String(pair[0][1])}
              </TableCell>

              {/* Second pair: might not exist if odd number of entries */}
              {pair[1] ? (
                <>
                  <TableCell className="border-b border-r border-gray-300 font-medium">
                    {pair[1][0]}
                  </TableCell>
                  <TableCell className="border-b border-gray-300">
                    {typeof pair[1][1] === "object" && pair[1][1] !== null
                      ? JSON.stringify(pair[1][1])
                      : String(pair[1][1])}
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="border-b border-r border-gray-300" />
                  <TableCell className="border-b border-gray-300" />
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="w-full f-row mt-10">
        <Button
          role="button"
          className="text-xl p-5 px-12 rounded-full f-row"
          onClick={handleSubmit(onSubmit)}
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

export default Submit;
