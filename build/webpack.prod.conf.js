const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Jarvis = require("webpack-jarvis");
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
    // <-- 减少 React 大小的关键,控制选择开发版本还是生产版本
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    //合并块
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
        filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
        algorithm: 'gzip',//算法
        test: new RegExp(
            '\\.(js|css)$'    //压缩 js 与 css
        ),
        test: /\.js$|\.html$/,
        threshold: 10240,//只处理比这个值大的资源。按字节计算
        minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
    })
]
// npm run build --report 开启该插件
if(process.env.npm_config_report){
    plugins.push( new BundleAnalyzerPlugin());
}
const webpackConfig = merge(baseWebpackConfig, {
    plugins:plugins
})
module.exports = webpackConfig;