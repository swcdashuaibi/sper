var express = require('express');
var app = express();

// 当以/static/开头的时候，去./static目录中寻找
// 当省略第一个参数时，可通过省略/static/的方式来访问
app.use('/static/',express.static('./static/'));
app.engine('html',require('express-art-template'));

// 如果你希望修改默认的views视图渲染储存目录，可以
// app.set('views',储存路径)

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

app.get('/',function (req,res) {
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post',function (req,res) {
    res.render('post.html')
})

app.get('/pinglun',function (req,res) {
    var comment = req.query;
    comment.dateTime='2020-4-16';
    comments.unshift(comment);
    res.redirect('/')
})


app.listen(3000,function () {
    console.log('端口3000已成功运行。。。。')
})