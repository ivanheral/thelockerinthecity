const presets = [
    ["@babel/env", {
        targets: {
            browsers: ["last 2 versions", "ie >= 11"]
        },
        corejs: 3,
        useBuiltIns: "usage"
    }], "@babel/typescript", "@babel/react"


];

const plugins = ["@babel/plugin-syntax-dynamic-import"];

module.exports = {
    presets,
    plugins
}