const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {

    entry: {
        touchMyRipple: './index.js',
    },
    output: {
        filename: './dist/touchMyRipple.js',
        library: 'tmripple',
        libraryTarget: 'window',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CompressionPlugin()
    ]
};