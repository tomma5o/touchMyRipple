module.exports = {

    entry: {
        touchMyRipple: './touchMyRipple.js',
    },
    output: {
        filename: './dist/[name].bundle.js',
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
