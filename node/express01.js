var express = require('express');
var app = express();

// 当以/static/开头的时候，去./static目录中寻找
// 当省略第一个参数时，可通过省略/static/的方式来访问
app.use('/static/',express.static('./static'))
app.get('/',function (req,res) {
    res.send(`
    hello world!
    `)
})

app.listen(3000,function () {
    console.log('端口3000已成功运行。。。。')
})