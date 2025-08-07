import React from "react";
import Form from "./form";
import Image from "next/image";

const Login = () => {
  return (
    <main className="bg-bg f-row justify-around h-[85vh]">
      <aside className="f-col h-full max-w-150 min-w-100 hidden lg:flex">
        <div className="f-row bg-main-light rounded-xl  p-10 gap-4">
          <Image src={"/logo.png"} alt="logo" width={200} height={200} />
          <div className="f-col gap-6">
            <p className="text-txt-muted font-bold text-2xl text-center">
              Acadify – Your Smart Academic Companion
            </p>
            <p className="text-txt-muted font-bold text-2xl text-center">
              Trusted By Hundreds
            </p>
          </div>
        </div>
      </aside>
      <Form />
    </main>
  );
};

export default Login;
