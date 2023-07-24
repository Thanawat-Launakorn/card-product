import React, { FC } from "react";
import Container from "../container";

type Props = {
  children: React.ReactNode;
};
const AppContent: FC<Props> = ({ children }) => {
  return (
    <Container className="flex min-h-screen flex-col bg-gray-100">
      {children}
    </Container>
  );
};

export default AppContent;
