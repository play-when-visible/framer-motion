/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/play-when-visible.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "play-when-visible.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
