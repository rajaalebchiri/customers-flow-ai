"use client";

import React from "react";
import Billing from "./_components/Billing";
import InfoBar from "@/components/(dashboard)/InfoBar";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "convex/_generated/api";

const SettingsPage =  () => {

  const createP = useMutation(api.users.createUser)

  const createUser = () => {
    createP({ email: "test", authId: "test" });
   }


  return (
    <main className="p-12">
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <Billing />
      </div>
      <Button onClick={() => createUser()}>create</Button>
    </main>
  );
};

export default SettingsPage;
