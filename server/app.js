var express = require('express');
var path = require('path');
const config = require('./config');
// connect to the db and load models
require('./models').connect(config.dbUri);
//  mongodb://localhost/react_app
// mongodb://heroku_lkxhj5r9:1j3ndbl2n28rjvnlgjfj3fl6md@ds131329.mlab.com:31329/heroku_lkxhj5r9
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

const app = express();

const passport = require('passport');
const authCheckMiddleware = require('./middleware/auth-check');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
// tell app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../')));

app.use(passport.initialize());

//load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname, '../index.html'))
});

app.use('/api', authCheckMiddleware);
//routes
app.use('/', index);
app.use('/users', users);


app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
