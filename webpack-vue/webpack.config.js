
const webpack = require('webpack');

const path = require('path');

// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的。
// . 如果在package.json中的vue-loader的版本号在15.0.0以上，你需要在webpack.config.js中配置VueLoaderPlugin的相关依赖。或回滚vue-loader的版本号。
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
        }),
        // 解决以下问题
        // vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
        new VueLoaderPlugin() //new一个实例
    ],
    module:{
        rules:[//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            //npm i less less-loader -D
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //将es6的代码转换成低版本的代码
            //npm i babel-core babel-loader babel-plugin-transform-runtime -D
            //npm i babel-preset-stage-0 -D
            {test:/\.js$/,use: 'babel-loader',exclude:/node_modules/ },
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{//修改vue被倒入时候包的路径
            "vue$":"vue/dist/vue.js"
        }
    }

}