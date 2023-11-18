const { DataTypes } = require("sequelize");
const sequelize = require("./../migrations/db");

const Restaurant = sequelize.define("restaurant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  contact: {
    type: DataTypes.STRING,
  },
});


module.exports = Restaurant;
