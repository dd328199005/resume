let webpack = require('webpack')
let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: path.join(__dirname,'./src/js/index.js'),
    output: {
        path: path.join(__dirname,'./public'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: './', //本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: {
            scss: path.join(__dirname, './src/scss'),
            js: path.join(__dirname, './src/js'),
            index: path.join(__dirname, ''),
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader",
                        "sass-loader"
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader",
                    ]
                }),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/view/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("style.css"), //分离css
    ]
}