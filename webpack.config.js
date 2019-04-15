const path = require('path');


module.exports = {
    // mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'YUI',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'] //webpack可以寻找的文件
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'YUI-react',
    //         template: 'index.html'
    //     })
    // ],
    // externals: {    //外部环境 不打包的库
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     },
    // },

};