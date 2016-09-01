
/**
 * Created by Administrator on 2016/8/3 0003.
 */
var secret = require('./secret');

module.exports = {
    env: 'prod',
    name: 'user_web',
    host: "www.cmstheme.com",
    domain: '.cmstheme.com',
    debug: false,
    port: 8082,
    logs_level: "ERROR",
    path: {
        views: 'views/dist',
        routes: 'routes',
        baseUrl: 'http://test.cmstheme.com',
        gulp: {
            build: 'build',
            dist: 'dist'
        }
    },
    database: secret.database.production,
    redis: secret.redis.production,
    des_3: secret.des_3,
    auth: secret.auth,
    solr: secret.solr.production
};