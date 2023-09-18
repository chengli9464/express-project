const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

//全局中间件，解析请求中的JSON格式的数据
app.use(express.json());
//全局中间件，解析urlencoded格式数据(键值对)
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

//全局中间件，提供静态文件 public目录下内容
app.use(express.static(path.join(__dirname, 'public')));
//全局中间件，cors解决跨域问题
app.use(cors());
//全局中间件，解析请求头的token
app.use((req, res, next) => {
  const { headers } = req;
  console.log(headers.authority);
  if (headers.authority) {
    //解析头
    // console.log(headers.authority);
    const decoded = jwt.verify(headers.authority, '服务器的JWT密码');
    // console.log(decoded);
    Object.assign(req.body, decoded);
  }
  next();
});
//使用路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
//错误中间件
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
