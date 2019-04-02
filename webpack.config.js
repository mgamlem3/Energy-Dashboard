const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js",
        buildingDetails: "./src/building_details.js",
        buildingComparison: "./src/building_comparison.js"
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
        new webpack.HotModuleReplacementPlugin()
    ]
};
