var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        module: {
            rules: [{
                    test: /\.tsx$/,
                    exclude: /node_modules/,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'tsx',
                        target: 'es2015',
                    }
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'ts',
                        target: 'es2015',
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'js',
                        target: 'es2015',
                    }
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'jsx',
                        target: 'es2015',
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/html/index.html')
            })
        ]
    }
};