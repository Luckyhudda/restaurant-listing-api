const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("restaurants", "admin", "dO5JQ4ww", {
  host: "mysql-154743-0.cloudclusters.net",
  port: 19069,
  dialect: "mysql",
});


module.exports = sequelize;