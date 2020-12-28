/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    target: "web",
    entry: {
        "fm-play-when-visible": path.resolve(
            __dirname,
            "src/fm-play-when-visible.tsx"
        ),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "fm-play-when-visible.js",
        library: "PlayWhenVisible",
        libraryTarget: "umd",
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
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM",
        },
    },
    mode: "production",
};
