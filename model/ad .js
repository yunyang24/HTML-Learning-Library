/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('ad', {
    type: {
        type:Sequelize.STRING(16),
        allowNull: true,
        defaultValue: 0
    },
    title:{
        type:Sequelize.STRING(32),
        allowNull: false,
        defaultValue: ''
    },
    ad_img: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    },
    ad_url: {
        type: Sequelize.STRING(64), // 指定值的类型
        allowNull: false,
        defaultValue: ''
    }
},{
    freezeTableName: true
});