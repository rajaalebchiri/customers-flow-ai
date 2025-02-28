import React from "react";
import Billing from "./_components/Billing";
import InfoBar from "@/components/(dashboard)/InfoBar";

import { getSession } from "@auth0/nextjs-auth0";

const SettingsPage = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <main className="p-12">
      <InfoBar />
      {/* <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10"> */}
         <div className="w-full chat-window flex-1 h-0 flex flex-col gap-10">
        {user && (
          <div>
            {" "}
            <Billing authId={user?.sub || ""} />{" "}
          </div>
        )}
      </div>
    </main>
  );
};

export default SettingsPage;
