'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tables = sequelize.define('Tables', {
    tableNumber: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {});
  Tables.associate = function(models) {
    Tables.hasMany(models.Orders);
  };
  return Tables;
};