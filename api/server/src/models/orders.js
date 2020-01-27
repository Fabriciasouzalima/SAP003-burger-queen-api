'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    table_id: DataTypes.INTEGER,
    status_order: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.hasMany(models.Product)
  };
  return Orders;
};