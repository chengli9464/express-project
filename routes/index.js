
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const menuData = [
  {
    path: '/home',
    name: 'home',
    label: '首页',
  },
  {
    path: '/system',
    label: '系统管理',
    children:[
      {
        path:'/user',
        name:'user',
        label:'用户管理'
      },
      {
        path:'/role',
        name:'role',
        label:'角色管理'
      },
      {
        path:'/menu',
        name:'menu',
        label:'菜单管理'
      },
      {
        path:'/notice',
        name:'notice',
        label:'通知公告'
      },
    ]
  },
  {
    path:'/monitor',
    label:'系统监控',
    children:[
      {
        path:'/online',
        name:'online',
        label:'在线用户'
      },
      {
        path:'/job',
        name:'job',
        label:'定时任务'
      },
      {
        path:'/server',
        name:'server',
        label:'服务监控'
      },
    ]
  },
  {
    path:'/tool',
    label:'系统工具',
    children:[
      {
        path:'/build',
        name:'build',
        label:'表单构建'
      },
      {
        path:'/swagger',
        name:'swagger',
        label:'系统接口'
      },
    ]
  }
];

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

router.get('/getMenu', (req, res) => {
  res.send(menuData)
});


module.exports = router;
