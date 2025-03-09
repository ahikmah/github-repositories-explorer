import "@testing-library/jest-dom";

// import { pathsToModuleNameMapper } from "ts-jest/utils";

// import { compilerOptions } from "../tsconfig.json";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  moduleNameMapper: pathsToModuleNameMapper(
    { "src/*": ["./src/*"] },
    {
      prefix: "<rootDir>/",
    }
  ),
};
function pathsToModuleNameMapper(
  paths: { [key: string]: string[] },
  { prefix }: { prefix: string }
) {
  const moduleNameMapper: { [key: string]: string } = {};

  Object.keys(paths).forEach((key) => {
    const path = paths[key][0];
    const regexKey = key.replace("*", "(.*)");
    const regexPath = path.replace("*", "$1");
    moduleNameMapper[`^${regexKey}$`] = `${prefix}${regexPath}`;
  });

  return moduleNameMapper;
}
