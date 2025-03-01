import SectionHeader from "@/components/(dashboard)/SectionHeader";
import { api } from "convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import React from "react";

type Props = {
  authId: string;
};

const Billing = async (props: Props) => {
  const plan = await fetchQuery(api.subscriptions.getSubscription, {
    authId: props.authId || "",
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <SectionHeader label="Billing" message="Manage your billing details" />
      </div>
      <div className="lg:col-span-2 flex justify-start lg:justify-center">
        ADHD
      </div>
    </div>
  );
};

export default Billing;
