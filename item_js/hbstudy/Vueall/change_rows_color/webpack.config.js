const path = require('path')
//导入插件,得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
//new构造函数,创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定复制的页面
    template: './public/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html'
})

//左侧的｛｝是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


//使用node.js中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    //代表webpack运行的模式
    // mode: 'development'//mode用来指定构建模式.  可选值有development(开发阶段)和production(发布上线阶段) 
    devtool: 'nosources-source-map',
    mode: 'development', //可以压缩main.js文件的大小
    //entry指定要进行读取处理的文件 

    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 存放目录
        path: path.join(__dirname, 'dist'),
        //存放的文件名字
        filename: 'js/bundle.js',
    },
    //插件的数组 webpack运行时会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        //首次打包成功后,自动打开浏览器
        open: true,
        //在http协议中,如果端口号是80,则可以被省略
        port: 80,
        //指定运行的主机地址
        host: '127.0.0.1'
    },
    module: {//所有第三方文件模块的匹配规则
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|png|gif$/, use: 'url-loader?limit=3470&outputPath=images'
            },
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}
