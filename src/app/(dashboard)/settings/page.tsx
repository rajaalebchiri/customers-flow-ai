import React from "react";
import Billing from "./_components/Billing";
import InfoBar from "@/components/(dashboard)/InfoBar";
import { getPlan } from "@/actions/settings";

const SettingsPage = async () => {

  const plan = await getPlan()

  console.log(plan)

  return (
    <main className="p-12">
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <Billing />
      </div>
    </main>
  );
};

export default SettingsPage;
