var config = require('../config_default').config;
var logger = require("../common/log").logger("index");
var redis = require("redis"),
    client = redis.createClient(config.redis.port, config.redis.host);

client.on("error", function (err) {
   logger.error("redis error:" + err);
});


exports.cache = client;

