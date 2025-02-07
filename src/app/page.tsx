"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "convex/react";

import { api } from "../../convex/_generated/api";
import Header from "@/components/Header";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const tasks = useQuery(api.tasks.get);
  if (isLoading) return <p>Loading ....</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        dashboard
        {/* Your content */}
      </div>
      <div className="p-10 flex flex-col gap-6">
        <main className="">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </main>
        <main className="flex gap-3">home page</main>
      </div>
    </main>
  );
}
