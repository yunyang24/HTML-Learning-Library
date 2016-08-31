var user = require('./user');
var designer = require('./designer');
var witkey = require('./witkey');
var work  = require('./work ');
var work_type = require('./work_type');
var article = require('./article');
var article_type = require('./article_type');
var ad  = require('./ad ');
var message  = require('./message ');
var designer_list = require('./designer_list');
var witkey_list = require('./witkey_list');
var news = require('./news');
var admin  = require('./admin ');

exports.models = {
    user:user,
    designer:designer,
    witkey:witkey,
    work:work,
    work_type:work_type,
    article:article,
    article_type:article_type,
    ad:ad,
    message:message,
    designer_list:designer_list,
    witkey_list:witkey_list,
    news:news,
    admin:admin
};

