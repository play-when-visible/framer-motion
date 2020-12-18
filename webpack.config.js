// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/index.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
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
