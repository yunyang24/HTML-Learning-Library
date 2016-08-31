/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('work', {
    id: {
        type:Sequelize.BIGINT(16),
        primaryKey: true,
        autoIncrement: true,
        field: 'jid'
    },
    title:{
        type:Sequelize.STRING(32),
        allowNull: false,
        defaultValue: ''
    },
    type: {
        type:Sequelize.STRING(16),
        allowNull: true,
        defaultValue: '默认'
    },
    type_id:{
        type:SequelizeINTEGER(4),
        allowNull: false,
        defaultValue: 0
    },
    summary:{
        type:Sequelize.STRING(256),
        allowNull: false,
        defaultValue: '',
        comment: '申请理由'
    },
    thumb: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    img1: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    img2: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    img3: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    content:{
        type:Sequelize.TEXT,
        comment: '申请内容'
    },
    user_id:{
        type:Sequelize.BIGINT(16),
        allowNull: false,
        defaultValue: '',
        comment: '发布作品作者'
    }
},{
    freezeTableName: true,
    indexes: [
        {
            unique: false,
            fields: ['user_id','type_id']
        }
    ]
});