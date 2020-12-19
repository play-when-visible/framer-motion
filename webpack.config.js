/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/play-when-visible.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "main-bundle.js",
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
            },
        ],
    },
};
