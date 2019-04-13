module.exports = {
    entry: {
        index: './lib/index.jsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }

};