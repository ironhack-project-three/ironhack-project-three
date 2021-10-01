require('dotenv/config')

var createError = require('http-errors');
var express = require('express');

var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');
var winesRouter = require('./routes/wine');
const { isAuthenticated } = require("./middleware/jwt.middleware");

var server = express();

// Functional curling style of loading configuration
require('./config/db')
require('./config/global')(server)

server.use('/api', isAuthenticated, apiRouter);
server.use('/users', usersRouter);
server.use('/wines', winesRouter)

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = server;
