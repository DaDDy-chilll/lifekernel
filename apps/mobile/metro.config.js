const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add custom resolver for @/* paths
config.resolver.alias = {
  "@": "./",
};

// Add watch folders for components, hooks, and constants
config.watchFolders = ["./components", "./hooks", "./constants"];

module.exports = withNativeWind(config, { input: "./global.css" });
