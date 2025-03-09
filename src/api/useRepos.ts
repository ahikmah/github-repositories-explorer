import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchRepos } from "./api";

const PAGE_PER_REQUEST = 5;

const useRepos = (username: string) => {
  return useInfiniteQuery({
    queryKey: ["repos", username],
    queryFn: ({ pageParam = 1 }) => fetchRepos(username, pageParam), // Fetch based on `pageParam`
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.repos.length < PAGE_PER_REQUEST
        ? null
        : allPages.length + 1;
    },
  });
};

export default useRepos;
