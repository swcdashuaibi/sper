var template = require('art-template');
var fs = require('fs');
var http = require('http');
var url = require('url');
// var ret = template.render('hellow{{name}}',{
//     name:'jack'
// });

// console.log(ret)
var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

http.createServer(function (req,res) {
    var pathobj = url.parse(req.url,true);
    var pathname = pathobj.pathname
    if(pathname==='/'){
        fs.readFile('./view/index.html',function (err,data) {
            if(err){
                res.end('运行错误')
            }
            var htmlStr = template.render(data.toString(), {
                comments: comments
            })
            res.end(htmlStr)
        })
    }else if(pathname =='/post'){
        fs.readFile('./view/post.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    }else if(pathname === '/pinglun'){
        var comment = pathobj.query;
        comment.dataTime = '2020-4-8';
        comments.unshift(comment)
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end()
    }
    else if(pathname.indexOf('/static/') ==0){

        fs.readFile('.' + pathname, function (err, data) {

            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    }
}).listen(3000,function () {
    console.log('正常运行。。。。。')
})