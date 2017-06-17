
module.exports = {
    output: {
        filename: "[name].bundle.js",
        sourceMapFilename: "./map/[name].map"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    }
};
