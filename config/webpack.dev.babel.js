const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const babelConfig = require('./webpack.babel');

module.exports = function () {
    return merge(commonConfig(), babelConfig(), {
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