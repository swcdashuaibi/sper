var express = require('express');
var router = require('./router');
var app = express();


app.engine('html',require('express-art-template'));
app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));
// 把路由容器挂载在app服务中
app.use(router);


app.listen(3000,function () {
    console.log('running in 3000...')
})
