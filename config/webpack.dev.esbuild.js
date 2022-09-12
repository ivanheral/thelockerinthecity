const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const esbuildConfig = require('./webpack.esbuild');

module.exports = function () {
    return merge(commonConfig(), esbuildConfig(), {
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            hot: false,
            liveReload: true,
            open: true,
            historyApiFallback: true
        }
    })
};