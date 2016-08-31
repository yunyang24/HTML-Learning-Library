/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('designer_list', {
    works_num:{
        type:Sequelize.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
        comment: '浏览量'
    },
    articles_num:{
        type:Sequelize.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
        comment: '浏览量'
    },
    cover: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    join_time: {
        type:Sequelize.BIGINT(16),
        allowNull: true,
        defaultValue: 0
    },
    designer_id:{
        type:Sequelize.BIGINT(16),
        allowNull: false,
        defaultValue: ''
    }
}, {
    freezeTableName: true,
    indexes: [
        {
            unique: false,
            fields: ['designer_id']
        }
    ]
});