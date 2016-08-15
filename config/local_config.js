
/**
 * Created by Administrator on 2016/8/3 0003.
 */
var secret = require('../secret');

module.exports = {
    env: 'local',
    name: 'user_web',
    host: "localhost:8088",
    domain: 'localhost',
    debug: true,
    port: 8088,
    logs_level: "INFO",
    path: {
        views: 'views/dist',
        routes: 'routes/web',
        baseUrl: 'http://localhost:8088/public/src',
        gulp: {
            build: 'src',
            dist: 'dist'
        }
    },
    database: secret.database.local,
    redis: secret.redis.local,
    auth: secret.auth,
    solr: secret.solr.local
};