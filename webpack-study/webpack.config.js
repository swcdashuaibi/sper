
const webpack = require('webpack');

const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins:[//所有webpack插件的配置节点

        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module:{
        rules:[//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            //npm i less less-loader -D
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //将es6的代码转换成低版本的代码
            //npm i babel-core babel-loader babel-plugin-transform-runtime -D
            //npm i babel-preset-stage-0 -D
            {test:/\.js$/,use: 'babel-loader',exclude:/node_modules/ }
        ]
    }

}