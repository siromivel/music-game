"use strict";
const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: path.resolve(__dirname, "browser/src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-react"] }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "browser/dist/"),
        publicPath: "browser/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "browser/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
