/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('message ', {
    userName: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: '',
        field: 'username' // 指定存储在表中的键名称
    },
    email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        defaultValue: '',
        field:'usermail'
    },
    qq:{
        type:Sequelize.BIGINT(16),
        allowNull: false,
        defaultValue: ""
    },
    phone:{
        type:Sequelize.BIGINT(16),
        allowNull: false,
        defaultValue: ""
    },
    content:{
        type:Sequelize.TEXT,
        comment: '个人简介'
    },
    website: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    }
},{
    freezeTableName: true
});