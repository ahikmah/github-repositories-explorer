import { useQuery } from "@tanstack/react-query";

import type { User } from "src/types/user";

import { fetchUsers, getLastPageFromHeader } from "./api";

const useUsers = (query: string, page: number) => {
  return useQuery({
    queryKey: ["users", query, page],
    queryFn: async () => {
      const result = await fetchUsers(query, page);
      return {
        users: result.users as User[],
        totalCount: result.totalCount,
        lastPage: getLastPageFromHeader(result.linkHeader),
      };
    },
    enabled: !!query,
    placeholderData: (previousData) =>
      previousData ?? { users: [], totalCount: 0, lastPage: null },
  });
};

export default useUsers;
