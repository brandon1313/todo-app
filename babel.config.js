const presets = {
  presets: [
    "@babel/env",
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};

module.exports = { presets };
