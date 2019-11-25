var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer('request',function (req,res) {

    res.setHeader('Content-Type','text/plain;charset=utf-8');
    // req.url 请求的地址
    res.write('hello,world,你好');
    res.end()
}).listen('8081',function () {
    console.log("监听成功")
});
