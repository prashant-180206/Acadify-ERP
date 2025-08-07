"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";

const SignUpBtn = () => {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-bg text-txt-muted hover:bg-bg-main rounded-full"
          onClick={() => {
            console.log("Pressed");
          }}
        >
          Sign Up
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-bg-dark">
        <DialogHeader>
          <DialogTitle className="text-center">
            For Universities to Sign Up
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-center">
            Contact us via email to register your university.
          </p>
          <p className="text-center">If already registered,</p>
          <p className="text-center">try logging in as admin.</p>
        </div>

        <div className="flex flex-row justify-around">
          <Button
            className="bg-bg text-txt-muted hover:bg-bg-main rounded-full"
            onClick={() => router.push("login")}
          >
            Admin Login
          </Button>

          <DialogClose asChild>
            <Button className="bg-bg text-txt-muted hover:bg-bg-main rounded-full">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpBtn;
