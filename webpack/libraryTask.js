module.exports = {

    entry: {
        touchMyRipple: './index.js',
    },
    output: {
        filename: './dist/touchMyRipple.js',
        library: 'tmripple',
        libraryTarget: 'umd',
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
};
