const { DataTypes } = require("sequelize");
const sequelize = require("./../migrations/db");

const Restaurant = sequelize.define("Restaurant", {
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
  openingHours: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Restaurant;
