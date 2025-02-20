import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ConvexClientProvider } from "./ConvexProvider";
import Header from "@/components/Header";
import FooterSection from "@/components/sections/footer/default";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConvexClientProvider>
      <UserProvider>
        <Header /> {children} <FooterSection />
      </UserProvider>
    </ConvexClientProvider>
  );
};

export default Provider;
