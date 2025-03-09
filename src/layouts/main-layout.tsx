import React from "react";

import Footer from "./footer";
import Header from "./header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container mx-auto p-4 max-w-screen-lg mt-9 h-full">
        {children}
      </main>

      <Footer />
    </>
  );
};
