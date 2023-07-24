"use client";
import React, { FC } from "react";
import AppHeader from "./header";
import AppContent from "./content";
import AppFooter from "./footer";
type Props = {
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </div>
  );
};

export default Layout;
