/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/fm-play-when-visible.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "fm-play-when-visible.js",
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
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "ReactDOM",
            commonjs: "ReactDOM",
            amd: "ReactDOM",
        },
    },
    mode: "production",
};
