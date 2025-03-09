import { useQuery } from "@tanstack/react-query";

import type { Repository } from "src/types/repo";

import { fetchRepos, getLastPageFromHeader } from "./api";

const useRepos = (username: string, page: number) => {
  return useQuery({
    queryKey: ["repos", username, page],
    queryFn: async () => {
      const result = await fetchRepos(username, page);
      return {
        repos: result.repos as Repository[],
        lastPage: getLastPageFromHeader(result.linkHeader),
      };
    },
    enabled: !!username,
    placeholderData: (previousData) =>
      previousData ?? { repos: [], lastPage: null },
  });
};

export default useRepos;
