// To build, run `./node_modules/.bin/webpack --project .`
const wcp = require('webpack-config-prefabs');

module.exports = wcp.nodeLibrary(module, {
    entry: './index.js',
    minimize: false,
    outputFilepath: 'bundle.js'
});