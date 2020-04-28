// 数据操作文件模块
// 操作文件中的数据，只处理数据，不关心业务
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/itcast', {
    useNewUrlParser: true,
    useUnifiedTopology: true     //这个即是报的警告
}).then(res => {
    console.log('数据库连接成功')
});


var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],//限定不是0就是1
        default:0
    },
    age:Number,
    hobbies:String
});

module.exports = mongoose.model('Student',studentSchema);
