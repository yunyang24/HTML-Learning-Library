/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('designer', {
    designer_id: {
        type:Sequelize.BIGINT(16),
        primaryKey: true,
        autoIncrement: true,
        comment: '设计师ID'
    },
    links: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    summary:{
        type:Sequelize.STRING(256),
        allowNull: false,
        defaultValue: '',
        comment: '申请理由'
    },
    content:{
        type:Sequelize.TEXT,
        comment: '申请内容'
    },
    user_id:{
        type:Sequelize.BIGINT(16),
        allowNull: false,
        defaultValue: '',
        comment: '对应的用户ID'
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ['user_id']
        }
    ]
});