const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        index: ["babel-polyfill", "./src/index.js"],
        buildingDetails: "./src/building_details.js",
        buildingComparison: "./src/building_comparison.js",
        display: "./src/display.js",
        management: "./src/management.js",
        sign_in: "./src/sign_in.js"
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        host: 'localhost',
        port: 5000
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/building_details.html",
            filename: "./building_details.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/building_comparison.html",
            filename: "./building_comparison.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/display.html",
            filename: "./display.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/management.html",
            filename: "./management.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/sign_in.html",
            filename: "./sign_in.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
