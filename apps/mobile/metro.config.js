const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// ✅ Extend watchFolders (DO NOT replace)
config.watchFolders = [workspaceRoot, ...config.watchFolders];

// ✅ Ensure correct node_modules resolution (monorepo-safe)
config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules'),
];

// ❌ REMOVE resolver.alias (handled by Babel instead)

module.exports = withNativeWind(config, {
  input: './global.css',
});
