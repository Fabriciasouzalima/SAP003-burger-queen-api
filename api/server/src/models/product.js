'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    item: DataTypes.STRING,
    price: DataTypes.STRING,
    isAlcoholic: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Itens)
  };
  return Product;
};