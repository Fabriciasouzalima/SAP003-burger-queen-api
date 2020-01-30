'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductId: {
        type: Sequelize.INTEGER
      },
      OrderId: {
        type: Sequelize.INTEGER,
      },
      statusItem: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Itens');
  }
};