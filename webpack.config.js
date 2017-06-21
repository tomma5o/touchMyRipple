module.exports = {

    entry: {
        touchMyRipple: './index.js',
    },
    output: {
        filename: './dist/touchMyRipple.js',
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
                        presets: ['es2015'],
                    },
                },
            },
        ],
    },
};
