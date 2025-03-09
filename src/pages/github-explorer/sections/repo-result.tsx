import React from "react";

import useRepos from "src/api/useRepos";

import { AnimateLogo } from "src/components/logo";

import { Repository } from "src/types/repo";

import { Error, NotFound, RepoCard } from "../sections";

interface RepoResultProps {
  username: string;
}

export const RepoResult: React.FC<RepoResultProps> = ({ username }) => {
  const {
    data: repoData,
    isFetching: isFetchingRepos,
    error: repoError,
  } = useRepos(username, 1);

  const isAnyError = !isFetchingRepos && repoError;

  const isNoReposFound =
    !isFetchingRepos && !repoError && repoData?.repos.length === 0;

  const isRepoFound = !isFetchingRepos && (repoData?.repos?.length ?? 0) > 0;

  console.log(repoData, isFetchingRepos, repoError);
  return (
    <div>
      {isFetchingRepos && (
        <div className="flex justify-center items-center">
          <AnimateLogo />
        </div>
      )}

      {isAnyError && <Error message={repoError?.message} />}

      {isNoReposFound && <NotFound type="repositories" />}

      {isRepoFound &&
        repoData?.repos.map((repo: Repository) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
    </div>
  );
};
