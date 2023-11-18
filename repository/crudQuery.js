const Restaurant = require("./../models/restaurantModel");

// create operation
const addRestaurant = async (data) => {
  const newRestaurant = await Restaurant.create(data);
  return newRestaurant;
};


// read operation
const getRestaurant = async () =>{
    return Restaurant.findAll();
}

module.exports = {
  addRestaurant,
  getRestaurant,
};
