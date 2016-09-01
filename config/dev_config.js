
/**
 * Created by Administrator on 2016/8/3 0003.
 */
var secret = require('./secret');

module.exports = {
    env: 'development',
    name: 'user_web',
    host: "www.dev.cmstheme.com",
    domain: '.dev.cmstheme.com',
    debug: true,
    port: 8082,
    logs_level: "INFO",
    path: {
        views: 'views/dist',
        routes: 'routes/web',
        baseUrl: 'http://test1.dev.cmstheme.com',
        gulp: {
            build: 'build',
            dist: 'dist'
        }
    },
    database: secret.database.development,
    redis: secret.redis.development,
    des_3: secret.des_3,
    auth: secret.auth,
    solr: secret.solr.development
};