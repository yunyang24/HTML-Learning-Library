/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('witkey', {
    witkey_id: {
        type:Sequelize.BIGINT(16),
        primaryKey: true,
        autoIncrement: true,
        comment: '威客ID'
    },
    links: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    case:{
        type:Sequelize.TEXT,
        comment: '成功案例'
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
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ['user_id']
        }
    ]
});