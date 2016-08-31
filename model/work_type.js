/**
 * Created by Administrator on 2016/8/15 0015.
 */
var Sequelize = require('./connect').Sequelize;
var sequelize = require('./connect').sequelize;

module.exports = sequelize.define('work_type', {
    type_id: {
        type:Sequelize.BIGINT(16),
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type:Sequelize.STRING(16),
        allowNull: true,
        defaultValue: 0
    }
},{
    freezeTableName: true
});