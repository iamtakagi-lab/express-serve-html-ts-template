const path = require("path")
const nodeExternals = require("webpack-node-externals");
const isProduction = process.env.NODE_ENV === "production"

/** @type {import("webpack").Configuration} */
const webConfig = {
    mode: isProduction ? "production" : "development",
    entry: {
        script: "./src/script.ts",
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "es2020", moduleResolution: "node" } },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    }
}

const serverConfig = {
    mode: isProduction ? "production" : "development",
    entry: {
        main: "./server/index.ts",
    },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "es2020", moduleResolution: "node" } },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    }
}

module.exports = [webConfig, serverConfig]