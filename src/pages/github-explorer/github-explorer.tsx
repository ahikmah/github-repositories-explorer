import { useState } from "react";

import { useThemeContext } from "src/theme";

import useUsers from "src/api/useUsers";

import { AnimateLogo } from "src/components/logo";
import { Button } from "src/components/ui/button";

import { cn } from "src/lib/utils";

import { User } from "src/types/user";

import { UserSearch, UserResult, NotFound, Error } from "./sections";

const GithubExplorer = () => {
  const { viewMode } = useThemeContext();
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const isMobile = viewMode === "mobile" || window.innerWidth <= 425;

  const {
    data: userData,
    isFetching: isFetchingUsers,
    error: userError,
  } = useUsers(searchQuery, page);

  const totalCount = userData?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / 5);

  const isNoUsersFound =
    searchQuery && !isFetchingUsers && !userError && userData?.totalCount === 0;

  const isUsersFound = searchQuery && !isFetchingUsers && userData;

  const isAnyError = !isFetchingUsers && userError;

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      setSearchQuery(searchValue);
      setPage(1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className={cn(isMobile ? "max-w-sm mx-auto" : "", "relative")}>
      {/* Input Form */}
      <UserSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
        isMobile={isMobile}
      />

      {/* Search Result Section */}
      <div className="mt-5 w-full">
        {isFetchingUsers && (
          <div className="flex justify-center items-center">
            <AnimateLogo />
          </div>
        )}

        {isAnyError && <Error message={userError?.message} />}

        {isNoUsersFound && <NotFound type="user" />}

        {isUsersFound && (
          <div className="mt-2">
            {/* Additional Information */}
            <div className="text-muted-foreground mb-3 text-[14px]">
              Showing users for "{searchQuery}"<br />
              <span className="text-xs font-bold">
                {totalCount} users found
              </span>
            </div>

            {/* User list */}
            <UserResult users={userData.users as User[]} />

            {/* Pagination */}
            <div className="mt-5 text-center">
              <div className="flex items-center justify-center gap-3">
                <Button onClick={handlePrevPage} disabled={page === 1}>
                  Prev
                </Button>

                <Button onClick={handleNextPage} disabled={page === totalPages}>
                  Next
                </Button>
              </div>
              <span className="text-muted-foreground text-xs text-center">
                Showing page {page} of {totalPages} pages
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubExplorer;
