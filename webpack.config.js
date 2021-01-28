const { resolveApp } = require('./server/utils')

module.exports = (webpackEnv) => ({
    entry: resolveApp('server/index.js'),
    mode: webpackEnv || 'development',
    output: {
        path: resolveApp('build'),
        filename: 'app.js',
        publicPath: resolveApp('client/build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    target: "node"
})