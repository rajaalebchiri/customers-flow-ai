import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ConvexClientProvider } from "./ConvexProvider";


const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConvexClientProvider>
      <UserProvider>
       {children} 
      </UserProvider>
    </ConvexClientProvider>
  );
};

export default Provider;
