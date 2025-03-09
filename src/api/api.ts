const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN_API;
const PAGE_PER_REQUEST = 5;
const BASE_URL = "https://api.github.com";

const fetchUsers = async (query: string, page: number) => {
  const response = await fetch(
    `${BASE_URL}/search/users?q=${query}&per_page=${PAGE_PER_REQUEST}&page=${page}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Unknown error occurred";
    const errorStatus = response.status;
    throw new Error(`${errorStatus}: ${errorMessage}`);
  }
  const data = await response.json();
  const linkHeader = response.headers.get("Link"); // Get pagination info

  return { users: data.items, totalCount: data.total_count, linkHeader };
};

const fetchRepos = async (username: string, page: number) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${PAGE_PER_REQUEST}&page=${page}`,
    {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Unknown error occurred";
    const errorStatus = response.status;
    throw new Error(`${errorStatus}: ${errorMessage}`);
  }

  const data = await response.json();
  const linkHeader = response.headers.get("Link");

  return { repos: data, linkHeader };
};

const getLastPageFromHeader = (linkHeader: string | null): number | null => {
  if (!linkHeader) return null;
  const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
  return match ? Number(match[1]) : null;
};

export { fetchUsers, fetchRepos, getLastPageFromHeader };
