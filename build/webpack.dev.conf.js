const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Jarvis = require("webpack-jarvis");
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const CompressionPlugin = require("compression-webpack-plugin");
const plugins = [
    //生产阶段因为要用到chunkhask,所以不能使用这个插件来做热替换
    new webpack.HotModuleReplacementPlugin(),
    // new Jarvis({
    //     port: 1337 // optional: set a port
    // })
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    // new CompressionPlugin({
    //     filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
    //     algorithm: 'gzip',//算法
    //     test: new RegExp(
    //         '\\.(js|css)$'    //压缩 js 与 css
    //     ),
    //     test: /\.js$|\.html$/,
    //     threshold: 10240,//只处理比这个值大的资源。按字节计算
    //     minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
    // })
]

if(process.env.npm_config_report){
    plugins.push(
        new BundleAnalyzerPlugin({
            //  可以是`server`，`static`或`disabled`。
            //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
            //  在“静态”模式下，会生成带有报告的单个HTML文件。
            //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
            analyzerMode: 'server',
            //  将在“服务器”模式下使用的主机启动HTTP服务器。
            analyzerHost: '127.0.0.1',
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 8888,
            //  路径捆绑，将在`static`模式下生成的报告文件。
            //  相对于捆绑输出目录。
            reportFilename: 'report.html',
            //  模块大小默认显示在报告中。
            //  应该是`stat`，`parsed`或者`gzip`中的一个。
            //  有关更多信息，请参见“定义”一节。
            defaultSizes: 'parsed',
            //  在默认浏览器中自动打开报告
            openAnalyzer: true,
            //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
            generateStatsFile: false,
            //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
            //  相对于捆绑输出目录。
            statsFilename: 'stats.json',
            //  stats.toJson（）方法的选项。
            //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
            //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            logLevel: 'info' //日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
        }),
    )
}

const devWebpackConfig = merge(baseWebpackConfig, {
    plugins:plugins,
    devServer:{
        host:'0.0.0.0',
        port:4321,
        //publicPath: '/',
        //contentBase: path.join(__dirname, "public"), //静态资源
        //代理
        proxy:{
            "/api/": {
                // http://10.92.36.135:8091/pms/
                // target: "http://120.78.156.54:8080",
                target: 'http://localhost:8080/pms',
                pathRewrite: {"^/api/" : ""}
            },
            "/perf/":{
                target:'http://localhost:9000',
                pathRewrite: {"^/perf/":""}
            },
            "/yh/":{
                target:'http://10.92.36.130:8066',
                pathRewrite:{"^/yh/":''}
            },
            "/jf/":{
                target:'http://10.92.36.141:8066',
                pathRewrite:{"^/jf/":''}
            },
            "/sx/":{
                target:'http://10.92.36.138:8066',
                pathRewrite:{"^/sx/":''}
            },

        },
        hot: true,
        historyApiFallback: true
    }
})
module.exports = devWebpackConfig;
