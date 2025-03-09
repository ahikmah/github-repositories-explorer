import { useState } from "react";

import { useThemeContext } from "src/theme";

import useUsers from "src/api/useUsers";

import { AnimateLogo } from "src/components/logo";

import { User } from "src/types/user";

import { UserSearch, UserResult, NotFound, Error } from "./sections";

const GithubExplorer = () => {
  const { viewMode } = useThemeContext();
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const isMobile = viewMode === "mobile" || window.innerWidth <= 425;

  const {
    data: userData,
    isFetching: isFetchingUsers,
    error: userError,
  } = useUsers(searchQuery, 1);

  const isNoUsersFound =
    searchQuery && !isFetchingUsers && !userError && userData?.totalCount === 0;

  const isUsersFound = searchQuery && !isFetchingUsers && userData;

  const isAnyError = !isFetchingUsers && userError;

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      setSearchQuery(searchValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={isMobile ? "max-w-sm mx-auto" : ""}>
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

        {isUsersFound && <UserResult users={userData.users as User[]} />}
      </div>
    </div>
  );
};

export default GithubExplorer;
