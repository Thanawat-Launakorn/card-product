import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Container from "../container";

type Props = {
  children: React.ReactNode;
};
const AppContent: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  return (
    <Container
      className={`min-h-[630px] flex-grow ${
        pathname === "/cart" ? "bg-zinc-50" : "bg-white"
      } `}
    >
      {children}
    </Container>
  );
};

export default AppContent;
