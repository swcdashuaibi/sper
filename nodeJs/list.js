var fs = require("fs");
var http = require("http");
var path = require('path');

http.createServer('request',function (req,res) {
    if(req.url === "/" || req.url === "/index"){
        fs.writeFile(path.join(__dirname,'page','index.html'),function (data,err) {
            if(err){
                throw err;
            }
            res.end(data)
        })
    }
}).listen('8081',function () {
    console.log("监听成功")
})