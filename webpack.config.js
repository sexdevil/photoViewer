/*编译webpack组件前
* 运行npm install 安装node依赖
* 之后运行npm run start编译webpack 每次git提交只提交你的webpack组件文件*/


module.exports = {
    entry:  {
        "loading":__dirname + "/loading/loading.js",
        "photoViewer":__dirname + "/photoViewer/photoViewer.js"
    },//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/static/js/",//打包后的文件存放的地方
        filename: "webpack_[name].js",//打包后输出文件的文件名
        library: "webpack_[name]"//打包后输出全局对象
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'//添加对样式表的处理
            },
            {
                test: /\.html$/,
                loader: 'html'//添加对模版的处理
            }
        ]
    }
}
