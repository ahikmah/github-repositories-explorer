import React from "react";
import { Logo } from "src/components/logo/logo";
import { ThemeToggler } from "src/components/theme-toggler";
import { ViewToggler } from "src/components/view-toggler";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 shadow-sm dark:bg-gray-800 bg-gray-100 text-gray-600 dark:text-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between py-2 max-w-screen-lg">
        <Logo width="60px" height="60px" />

        <div className="hidden md:flex items-center">
          <ViewToggler />
        </div>

        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
