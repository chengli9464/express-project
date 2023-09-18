// 账号密码数据库
// 导入mongoose
const mongoose = require('mongoose')
// 创建文档结构
const loginSchema = new mongoose.Schema({
  username : String,
  password : String
})
// 创建模型对象 对文档操作的封装对象 对文档进行增删改查 第一个参数集合名 第二个参数是文档对象
const loginModel = mongoose.model('login',loginSchema);

// 往文档中新增对象 模型对象.create()方法


module.exports = loginModel