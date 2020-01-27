'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itens = sequelize.define('Itens', {
    products_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    status_item: DataTypes.INTEGER
  }, {});
  Itens.associate = function(models) {
    // associations can be defined here
  };
  return Itens;
};