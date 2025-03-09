import React from "react";

import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

import { cn } from "src/lib/utils";

interface UserSearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  handleSearch: () => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isMobile: boolean;
}

export const UserSearch: React.FC<UserSearchProps> = ({
  searchValue,
  setSearchValue,
  handleSearch,
  handleKeyPress,
  isMobile,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-3 flex-col",
        isMobile ? "flex-col" : " md:flex-row"
      )}
    >
      <div className={cn("w-full", !isMobile ? "md:w-[80%]" : "w-full")}>
        <Input
          type="text"
          placeholder="Enter username"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className={cn("w-full", !isMobile ? "md:w-[20%]" : "w-full")}>
        <Button
          className="w-full bg-blue-400 hover:bg-blue-500 dark:bg-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
