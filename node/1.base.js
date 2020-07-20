var fs = require('fs');
var http = require('http');

var server=http.createServer();

server.on('request',function(req,res){
    var url = req.url;
    if(url === '/'){
        fs.readFile('./static/index.html',function (err,data) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            if(err){
                res.end('读取文件失败')
            }else{
                res.end(data)
            }
        })
    }
});

server.listen(3000,function () {
    console.log('端口号3000，正常启动。。。。')
})
