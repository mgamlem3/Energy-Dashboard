const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  
});

module.exports = {
  entry: {
    index: './src/index.js',
    building_details: './src/building_details.js',
    building_comparison: './src/building_comparison.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
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
    })
  ]
};
