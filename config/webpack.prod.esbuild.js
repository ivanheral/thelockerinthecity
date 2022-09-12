const TerserPlugin = require("terser-webpack-plugin");


const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const esbuildConfig = require('./webpack.esbuild');

module.exports = function () {
    return merge(commonConfig(), esbuildConfig(), {
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
    });
};