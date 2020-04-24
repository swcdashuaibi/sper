// 数据操作文件模块
// 操作文件中的数据，只处理数据，不关心业务

var fs = require('fs');
var dbPath = './db.json';

exports.find = function (callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            callback(err)
        }
        callback(null,JSON.parse(data))
    })
};

exports.findById = function(id,callback){
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            callback(err)
        }
        var stu = JSON.parse(data).students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null,stu)
    })
};

exports.save = function (student,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            callback(err)
        }
        var students = JSON.parse(data).students;
        student.id = students.length+1;
        students.push(student)
        var fileData = JSON.stringify({students:students});
        fs.writeFile(dbPath,fileData,function (err) {
            if(err){
                callback(err)
            }
            callback(null)
        })
    })
};

exports.updataById = function (student,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            callback(err)
        }
        var students = JSON.parse(data).students;
        student.id = parseInt(student.id);
        var stu = students.find(function (item) {
            return item.id === student.id
        });
        for(var key in student){
            stu[key] = student[key]
        }
        var fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileData,function (err) {
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.delete = function (id,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            callback(err)
        }
        id = parseInt(id);
        var students = JSON.parse(data).students;
        var stuIndex = students.findIndex(function (item) {
            return item.id === id
        });

        students.splice(stuIndex,1);
        var fileData = JSON.stringify({
            students:students
        })
        console.log(fileData)

        fs.writeFile(dbPath,fileData,function (err) {
            if(err){
                return callback(err)
            }
            callback(null)
        })

    })
}