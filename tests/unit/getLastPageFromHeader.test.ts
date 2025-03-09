import { getLastPageFromHeader } from "../../src/api/api.mock";

test("extracts last page number from Link header", () => {
  const header = `<https://api.github.com/search/users?q=ahikmah&per_page=2&page=2>; rel="next", <https://api.github.com/search/users?q=ahikmah&per_page=2&page=2>; rel="last"`;
  expect(getLastPageFromHeader(header)).toBe(2);
});

test("returns null if Link header is missing", () => {
  expect(getLastPageFromHeader(null)).toBeNull();
});

test("returns null if 'last' page is not found", () => {
  const header = `<https://api.github.com/search/users?q=ahikmah&per_page=2&page=1>; rel="prev", <https://api.github.com/search/users?q=ahikmah&per_page=2&page=1>; rel="first"`;
  expect(getLastPageFromHeader(header)).toBeNull();
});
