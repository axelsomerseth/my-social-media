import type { JestConfigWithTsJest } from "ts-jest";

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 *
 * For ts-jest specific options, visit:
 * https://kulshekhar.github.io/ts-jest/docs/getting-started/options/
 *
 * When using TypeScript Jest config file, Jest will use ts-node to compile the config file.
 * ts-jest doesn't take part in that process.
 */

const jestConfig: JestConfigWithTsJest = {
  // All imported modules in your tests should be mocked automatically
  automock: false,

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // Only collect coverage from these layers:
  collectCoverageFrom: [
    "./source/repository/*",
    "./source/middlewares/*",
    "./source/handlers/*",
    "./source/services/*",
    "./source/utils/*",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "./build",
    "./source/db/migrations",
    "./source/db/entities",
  ],

  // Whether to use watchman for file crawling
  watchman: true,
};

export default jestConfig;
