
/**
 * Created by Administrator on 2016/8/3 0003.
 */
var secret = require('./secret');

module.exports = {
    env: 'local',
    name: 'user_web',
    host: "localhost:8082",
    domain: 'localhost',
    debug: true,
    port: 8082,
    logs_level: "INFO",
    path: {
        views: 'views/build',
        routes: 'routes/web',
        baseUrl: 'http://localhost:8082/public/build',
        gulp: {
            build: 'build',
            dist: 'dist'
        }
    },
    database: secret.database.local,
    redis: secret.redis.local,
    des_3: secret.des_3,
    auth: secret.auth,
    solr: secret.solr.local
};