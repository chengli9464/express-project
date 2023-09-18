const loginDB = require('../index')

const loginMongoDB = () =>{ loginDB(()=>{
  console.log('连接成功');
})
}
module.exports = loginMongoDB
