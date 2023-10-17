import React from "react";
import Navbar from "./Navbar";
import ModalPage from "@/components/Modal/modalPage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <ModalPage />
      {children}
    </div>
  );
}

export default Layout;
