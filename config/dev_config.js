
/**
 * Created by Administrator on 2016/8/3 0003.
 */
var secret = require('../secret');

module.exports = {
    env: 'development',
    name: 'user_web',
    host: "www.dev.cmstheme.com",
    domain: '.dev.cmstheme.com',
    debug: true,
    port: 8088,
    logs_level: "INFO",
    path: {
        views: 'views/dist',
        routes: 'routes/web',
        baseUrl: 'http://test.dev.cmstheme.com',
        gulp: {
            build: 'src',
            dist: 'dist'
        }
    },
    database: secret.database.development,
    redis: secret.redis.development,
    auth: secret.auth,
    solr: secret.solr.development
};