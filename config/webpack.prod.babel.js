const TerserPlugin = require("terser-webpack-plugin");

const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const babelConfig = require('./webpack.babel');

module.exports = function () {
    return merge(commonConfig(), babelConfig(), {
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
    });
};