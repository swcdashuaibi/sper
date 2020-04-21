var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    fs.readFile('./db.json','utf8',function (err,data) {
        if(err){
            return res.status(500).send('server error')
        }
        // 从文件中读取的数一定是字符串，所以在这一定要手动转换对象
        res.render('index.html',{
            "students": JSON.parse(data).students
        })

    })
});

module.exports = router;