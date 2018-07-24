const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {

    entry: {
        touchMyRipple: './src/index.js',
    },
    output: {
        filename: './lib/touchMyRipple.js',
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
