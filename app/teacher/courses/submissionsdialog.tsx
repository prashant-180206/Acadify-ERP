"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { submissions, DB_Submission } from "./data";
import ModifyAssignmentPopover from "./modifyassignment";

// Props: assignmentId (number), open, onOpenChange (optional), and optional trigger element
interface SubmissionsDialogProps {
  assignmentId: number;
}

const SubmissionsDialog: React.FC<SubmissionsDialogProps> = ({
  assignmentId,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full text-sm md:text-lg">View</Button>
      </DialogTrigger>
      <DialogContent className="container bg-bg overflow-auto">
        <DialogHeader>
          <DialogTitle>Assignment Submissions</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((s, idx) => (
              <TableRow key={s.submission_id}>
                <TableCell>
                  01{/* Replace with actual roll if available */}
                </TableCell>
                <TableCell>Raj Pilgrinron</TableCell>
                {/* Should come from student data */}
                <TableCell>
                  {s.status === "Submitted" ? (
                    <span aria-label="Submitted" role="img">
                      ✅
                    </span>
                  ) : (
                    <span aria-label="Not Submitted" role="img">
                      ❌
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <a
                    href={`https://hygeilgbeib.ngeoruhgjnnjrg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    Link
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
          <ModifyAssignmentPopover assignmentId={assignmentId} />
          <Button
            variant="destructive"
            className="bg-red-400 hover:bg-red-500 rounded-full"
          >
            Delete Assignment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubmissionsDialog;
