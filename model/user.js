/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('user', {
    /* id: {
     type:Sequelize.BIGINT(16),
     primaryKey: true,
     autoIncrement: true,
     field: 'uid'     //将默认的id更改成uid ,用户唯一ID
     }, */
    uid: {    //与上面等价
        type:Sequelize.BIGINT(16),
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: '',
        field: 'username' // 指定存储在表中的键名称
    },
    password:{
        type:Sequelize.STRING(64),
        allowNull: false,
        defaultValue: '',
        comment: '密码'
    },
    age:{
        type:Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: '1:男  0：女'
    },
    avatar:{
        type:Sequelize.STRING(256),
        allowNull: false,
        defaultValue: ''
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        defaultValue: '',
        field:'usermail'
    },
    mail_validate:{
        type: Sequelize.INTEGER(2),
        allowNull: false,
        defaultValue: 0,
        comment: '邮箱是否被验证'
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
    phone_validate:{
        type: Sequelize.INTEGER(2),
        allowNull: false,
        defaultValue: 0,
        comment: '邮箱是否被验证'
    },
    signature:{
        type:Sequelize.STRING(256),
        allowNull: false,
        defaultValue: '',
        comment: '个性签名'
    },
    content:{
        type:Sequelize.TEXT,
        comment: '个人简介'
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
});