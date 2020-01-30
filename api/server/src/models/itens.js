'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itens = sequelize.define('Itens', {
    productsId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    statusItem: DataTypes.STRING
  }, {});
  Itens.associate = function(models) {
    // associations can be defined here
    
  };
  return Itens;
};