import React, { useCallback, useRef } from "react";

import useRepos from "src/api/useRepos";

import { AnimateLogo } from "src/components/logo";

import { Error, NotFound, RepoCard } from "../sections";

interface RepoResultProps {
  username: string;
}

export const RepoResult: React.FC<RepoResultProps> = ({ username }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching: isFetchingRepos,
    error: repoError,
  } = useRepos(username);

  const observer = useRef<IntersectionObserver | null>(null);

  const repos = data?.pages.flatMap((page) => page.repos) ?? [];

  const lastRepoRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );
  const isAnyError = !isFetchingRepos && repoError;

  const isNoReposFound = !isFetchingRepos && !repoError && repos.length === 0;

  const isInitFetch = isFetchingRepos && repos.length === 0;

  // const isRepoFound = !isFetchingRepos && (repos?.length ?? 0) > 0;

  return (
    <div>
      {isInitFetch && (
        <div className="flex justify-center items-center">
          <AnimateLogo />
        </div>
      )}

      {isAnyError && <Error message={repoError?.message} />}

      {isNoReposFound && <NotFound type="repositories" />}

      <div>
        {repos.map((repo, index) => (
          <RepoCard
            key={repo.id}
            repo={repo}
            ref={index === repos.length - 1 ? lastRepoRef : null}
          />
        ))}

        {isFetchingNextPage && (
          <div className="flex justify-center items-center">load more...</div>
        )}
      </div>
    </div>
  );
};
