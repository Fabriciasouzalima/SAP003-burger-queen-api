'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    TableId: DataTypes.INTEGER,
    statusOrder: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.Itens);
    Orders.belongsTo(models.Tables);
  };
  return Orders;
};