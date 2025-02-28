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
    console.log(plan);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <SectionHeader label="Billing" message="Manage your billing details" />
      </div>
    </div>
  );
};

export default Billing;
