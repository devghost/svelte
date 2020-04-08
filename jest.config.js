// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "svelte"],
  verbose: true,

  // The root directory that Jest should scan for tests and modules within
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [
  // "@testing-library/jest-dom/extend-expect"
  // "@testing-library/svelte/cleanup-after-each"
  // ... other setup files ...
  // ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/?(*.)+(spec|test).(js|ts|tsx)?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["node_modules"],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["node_modules"],
};
