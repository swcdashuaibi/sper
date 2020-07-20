var fs = require('fs');
var http = require('http');

var server=http.createServer();

var baseUrl = './static';
server.on('request',function(req,res){
    var url = req.url;

    var filePath = '/template.html';
    if(url !== '/'){
        filePath = url;
    }
    fs.readFile(baseUrl+filePath,function (err,data) {
        if(err){
            res.end('读取文件失败')
        }
        console.log(data);
        data = data.toString();
        data = data.replace('^_^', '111')
        res.end(data)

    })
});

server.listen(3000,function () {
    console.log('端口号3000，正常启动。。。。')
})
