export default {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
