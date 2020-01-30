'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tables = sequelize.define('Tables', {
    table_number: DataTypes.INTEGER
  }, {});
  Tables.associate = function(models) {
    Tables.hasMany(models.Orders);
  };
  return Tables;
};