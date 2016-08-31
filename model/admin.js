/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('admin', {
    userName: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: '',
        comment: '用户名'
    },
    password:{
        type:Sequelize.STRING(64),
        allowNull: false,
        defaultValue: '',
        comment: '密码'
    }
},{
    freezeTableName: true
});

