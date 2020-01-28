'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    tableId: DataTypes.INTEGER,
    statusOrder: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Order.hasMany(models.Order_Itens)
  };
  return Orders;
};