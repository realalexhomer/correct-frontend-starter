const path = require("path");

module.exports = {
  rootDir: "..",
  coverageDirectory: "<rootDir>/jest/__coverage__/",
  testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
  setupFiles: ["<rootDir>/jest/__mocks__/shim.js"],
  roots: ["<rootDir>/src/", "<rootDir>/jest/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/jest/__mocks__/styleMock.js"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  globals: {
    DEVELOPMENT: false,
    FAKE_SERVER: false
  },
  moduleDirectories: [path.resolve(__dirname, "./src"), "node_modules"]
};
