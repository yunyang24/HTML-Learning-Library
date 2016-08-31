/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('news', {
    title:{
        type:Sequelize.STRING(32),
        allowNull: false,
        defaultValue: ''
    },
    content:{
        type:Sequelize.TEXT,
        comment: '个人简介'
    }
},{
    freezeTableName: true
});
