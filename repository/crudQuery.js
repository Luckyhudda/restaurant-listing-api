const Restaurant = require("./../models/restaurantModel");




// create operation
const addRestaurant = async (data) => {
  const newRestaurant = await Restaurant.create(data);
  return newRestaurant;
};

// read operation
const getRestaurants = async () => {
  return Restaurant.findAll({
    order: [["createdAt", "DESC"]], 
  });
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


// delete operation
const DeleteRestaurant = async(id) =>{
    return Restaurant.destroy({
        where:{
            id
        }
    })
}

module.exports = {
  addRestaurant,
  getRestaurants,
  UpdateRestaurant,
  DeleteRestaurant,
};
