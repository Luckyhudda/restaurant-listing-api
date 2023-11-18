const Restaurant = require("./../models/restaurantModel");

// create operation
const addRestaurant = async (data) => {
  const newRestaurant = await Restaurant.create(data);
  return newRestaurant;
};

module.exports = {
  addRestaurant,
};
