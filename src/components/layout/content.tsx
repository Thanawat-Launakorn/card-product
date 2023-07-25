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
      className={`flex flex-col ${
        pathname === "/" ? "bg-gray-100" : "bg-white"
      } `}
    >
      {children}
    </Container>
  );
};

export default AppContent;
