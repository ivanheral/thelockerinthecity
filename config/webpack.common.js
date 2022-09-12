var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
 
    return {
        entry: {
            app: path.resolve(__dirname, '../src/ts/main')
        },
        output: {
            path: path.resolve(__dirname, '../build'),
            filename: '[name].bundle.js',
            clean: true
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.jsx']
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
            },
        },
        module: {
            rules: [{
                    test: /\.module.css$/i,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        }
                    ],
                },
                {
                    test: /\main.css$/i,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader"
                    ],
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.API_URL': JSON.stringify("https://jsonplaceholder.typicode.com")

            }),
            new MiniCssExtractPlugin({
                filename: "[name].bundle.css"
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/html/index.html')
            }),
            new CopyPlugin({
                patterns: [{
                    from: path.resolve(__dirname, '../src/assets'),
                    to: "assets/",
                }, ],
            }),
        ]

    }
};