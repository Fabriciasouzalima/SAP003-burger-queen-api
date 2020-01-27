'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    item: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    is_alcoholic: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Orders)
  };
  return Product;
};