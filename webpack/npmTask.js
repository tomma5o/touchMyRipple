module.exports = {

    entry: {
        touchMyRipple: './index.js',
    },
    output: {
        filename: './dist/index.js'
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
    }
};
