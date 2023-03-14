const Sequelize = require('sequelize');

module.exports = new Sequelize('collections', 'vw', 'Nietgeheim!', {
    host: 'collections.mysql.database.azure.com',
    dialect: 'mysql',
  });