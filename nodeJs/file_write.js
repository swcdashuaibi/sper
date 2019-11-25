// 实现文件写入

var fs = require("fs");
var path = require("path");
// 要写入的文本内容
// var msg = "已经成功写入";
//
// fs.writeFile('./lib/hello.txt',msg,'utf-8',function (err) {
//     if(err){
//         console.log(err)
//     }else {
//         console.log("OK")
//     }
// });
console.log(path.join(__dirname,'lib/hello.txt'));
// 实现文件读取
fs.readFile(path.join(__dirname,'lib/hello.txt'),'utf8',function (err,data) {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})