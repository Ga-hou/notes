const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    // webpack-dev-server
    devServer: {
        port: 3000,
        contentBase: './dist'
    },
    modules: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',//style-loader将它插入到页面中
                    'css-loader'//css-loader用于读取并加载css文件
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'APP',
            template: './public/index.html',
            favicon: './public/favicon.ico',
            minify: {
                removeComments: false, // 删除注释
                collapseWhitespace: false // 删除空格
            }
        })
    ]
}