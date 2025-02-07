import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ConvexClientProvider } from "./ConvexProvider";
import Header from "@/components/Header";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConvexClientProvider>
      <UserProvider>
        <Header /> {children}
      </UserProvider>
    </ConvexClientProvider>
  );
};

export default Provider;
