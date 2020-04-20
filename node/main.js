var express = require('express');
var app = express();

// 公开指定目录
app.use('/static/',express.static('./static/'));
app.get('/',function (req,res) {
    res.send('hello world')
});

app.listen(3000,function () {
    console.log('app is successful')
})