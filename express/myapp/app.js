var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("@prisma/client");
const { PrismaClient } = require('@prisma/client');
/**
 * 配置mysql
 */
const dotenv = require('dotenv');
dotenv.config(); // 从 .env 文件加载环境变量

var app = express();
const prisma = new PrismaClient();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.status == '500') {
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
});

// 添加中间件，将 Prisma Client 添加到请求上下文
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});


var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);
app.use('/static', express.static(path.join(__dirname, 'public')));



// 在应用程序关闭时断开 PrismaClient 连接
process.on('beforeExit', async () => {
  console.log('--beforeExit--');
  await prisma.$disconnect();
});




module.exports = app;
