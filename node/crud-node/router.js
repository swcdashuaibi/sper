var fs = require('fs');
var express = require('express');
var router = express.Router();
var fun = require('./student');

router.get('/',function (req,res) {
    fun.find(function (err,data) {
        if(err){
            return res.status(500).send('server error')
        }
        // 从文件中读取的数一定是字符串，所以在这一定要手动转换对象
        res.render('index.html',{
            "students": data.students
        })
    })
});
router.get('/student/new',function (req,res) {
    res.render('new.html')
});

router.post('/student/new',function (req,res) {
    fun.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})

router.get('/students/edit',function (req,res) {
    fun.findById(req.query.id,function (err,data) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html',{
            student:data
        })
    })
});

router.post('/student/edit',function (req,res) {
    fun.updataById(req.body,function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
});

router.get('/students/delete',function (req,res) {
    fun.delete(req.body.id,function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})
module.exports = router;