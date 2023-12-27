import { UserProvider } from "@/context/user";
import { InformationProvider } from "@/context/information";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <>
      <UserProvider><InformationProvider>{children}</InformationProvider></UserProvider>
    </>
  );
}

export default Providers;