// 导出函数 两个参数 第一个为成功连接的回调 第二个为连接失败的回调
module.exports = function (success,error = () => {console.log('连接失败!');}) {
  // MongoDB服务
  const mongoose = require('mongoose');

  const { dbHost, dbPort, dbName } = require('./config/config.js');
  // mongodb服务的开启                              数据库名称
  mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`);
  // 设置成功的回调 回调函数只执行一次
  mongoose.connection.once('open', () => {
    success();
  });
  // 连接失败的回调
  mongoose.connection.on('error', () => {
    error();
  });
  // 连接关闭的服务器
  mongoose.connection.on('close', () => {
    console.log('已关闭mongodb服务器');
  });
  // console.log('连接mongodb服务器超时');
  // mongoose.disconnect();
};
