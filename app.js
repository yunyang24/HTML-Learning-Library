/**
 * Created by Administrator on 2016/8/1 0001.
 */
var config = require('./config_default').config;
var auth = config.auth;
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger1 = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var logger = require("./common/log").logger("index");
var RedisStore = require('connect-redis')(session);
var indexRouter = require('./'+config.path.routes);
var app = express();

//app.use(log4js.connectLogger(this.logger('normal'), {level:'auto', format:':method :status :url  - :response-time ms'}));
// view engine setup
if (config.path && config.path.views) {
    app.set('views', path.join(__dirname, config.path.views));
    app.set('view engine', 'ejs');
}

var resoucePath = "/";
app.locals.resoucePath = resoucePath;

if (config.path.baseUrl) {
    app.locals.baseUrl = config.path.baseUrl.indexOf('http') > -1 ? config.path.baseUrl : ('/' + config.path.baseUrl);
}
app.locals.homepage = config.homepage || '';

app.use(express.static(path.join(__dirname, 'public')));
/*app.use("/public", express.static(path.join(__dirname, 'public')));*/

//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.compress());
/*app.use(favicon());*/
app.use(compression());
app.use(logger1('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(auth.auth_token_secret));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: auth.auth_token_secret,
    cookie: {maxAge: 24 * 60 * 1000},
    store: new RedisStore({
        host: config.redis.host,
        port: config.redis.port
    })
}));

app.disable('x-powered-by');


app.use(resoucePath, indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Page Not Found');
    res.render('error/404', {
        message: err.message,
        title: '404',
        error: {
            status: '404',
            stack: 'We looked everywhere but we could not find it!'
        }
    });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error/500', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
/*app.use(function (err, req, res, next) {
 var err = new Error('Server Error');
 res.render('error/500', {
 message: err.message,
 title: '500',
 error: {
 status: '500',
 stack: 'Some problems with our Server,sorry!'
 }
 });
 });*/

app.listen(config.port);

logger.info("Express server listening at:" + config.port + " start...");