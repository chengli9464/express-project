const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const users = [
  {
    uid: '10000',
    username: 'admin',
    password: '123456',
  },
];

/* GET home page. */
router.get('/user', function (req, res, next) {
  const {uid} = users
  res.send({
    status:1,
    msg:'成功登录',
    uid,
    ...req.body
  })
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
  // console.log(req.cookies);
  const jwtSecret = '服务器的JWT密码';
  const { username, password } = req.body;
  // console.log(users);
  const findUser = users.find((element) => {
    return username === element.username && password === element.password;
  });
  if (findUser) {
    //生成一个jwt token验证用户名密码
    const token = jwt.sign({ username, password}, jwtSecret, {
      algorithm: 'HS256',
      expiresIn: 10000,
    });
    res.send({
      token,
      status: 1,
      message: '账号密码正确！',
    });
  } else {
    res.send({
      status: 2,
      message: '账号密码错误！',
    });
  }
});

router.get('/getUser', (req, res) => {});

module.exports = router;
