const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { menuAdminUsers, menuUsers } = require('../public/data/menu');
const { users, adminUsers } = require('../public/data/user');

// 获取解析的token信息
router.get('/user', function (req, res, next) {
  if (req.body.username) {
    res.send({
      status: 1,
      msg: '成功登录',
      ...req.body,
    });
  } else {
    res.send({
      status: 2,
      message: '请登录!',
    });
  }
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  // console.log(users);
  res.send({
    status: 0,
    message: '注册成功！',
  });
});

router.post('/login', (req, res) => {
  //前端发送的请求体内容可以使用req.body属性接受

  const jwtSecret = '服务器的JWT密码';

  const { username, password } = req.body;

  let isAdmin = false;

  // 先验证管理员身份
  const findAdminUser = adminUsers.find((element) => {
    return username === element.username && password === element.password;
  });
  if (findAdminUser) {
    //确认管理员身份
    isAdmin = true;
    //生成一个jwt token验证用户名密码
    const token = jwt.sign({ username, password, isAdmin }, jwtSecret, {
      algorithm: 'HS256',
      expiresIn: 10000,
    });
    res.send({
      token,
      status: 1,
      isAdmin,
      message: '管理员账号密码正确！',
      menu: menuAdminUsers
    });
  } else {
    // 再验证普通用户
    const findUsers = users.find(
      (element) =>
        username === element.username && password === element.password
    );
    console.log(findUsers);
    if (findUsers) {
      isAdmin = false;
      const token = jwt.sign({ username, password, isAdmin }, jwtSecret, {
        algorithm: 'HS256',
        expiresIn: 10000,
      });
      console.log(token);
      res.send({
        token,
        status: 1,
        isAdmin,
        message: '普通用户账号密码正确！',
        menu: menuUsers
      });
    } else {
      res.send({
        status: 2,
        message: '账号密码错误！',
      });
    }
  }
});
// 没有使用 
router.get('/getMenu', (req, res) => {
  //第一次传进来是没有解析为 undefine
  // 后续传进来利用解析token来判断
  console.log(req.body.isAdmin,666666);
  req.body.isAdmin ?   res.send(menuUsers) : res.send(menuAdminUsers) ;

});

module.exports = router;
