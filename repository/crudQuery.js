const Restaurant = require("./../models/restaurantModel");




// create operation
const addRestaurant = async (data) => {
  const newRestaurant = await Restaurant.create(data);
  return newRestaurant;
};

// read operation
const getRestaurants = async () => {
  return Restaurant.findAll();
};

// Update operation
const UpdateRestaurant = async (data, id) => {
  return Restaurant.update(
    data,
    {
        where: {
      id,
    },
    }
  );
};

module.exports = {
  addRestaurant,
  getRestaurants,
  UpdateRestaurant,
};
