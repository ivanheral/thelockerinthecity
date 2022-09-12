var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.(tsx?|m?js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }]
        }
    }
};