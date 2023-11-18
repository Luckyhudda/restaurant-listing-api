const repository = require("./../repository/crudQuery");

const crudController = {
  // handle req-res of create operation
  CREATE: (req, res) => {
    const { name, address, contact } = req.body;

    if (!name || !address || !contact) {
      res.send(400).json({
        status: "fail",
        message: "fill the details",
      });
    }

    repository
      .addRestaurant(req.body)
      .then((result) => {
        res.status(201).json({
          status: "success",
          result,
        });
      })
      .catch((err) => {
        console.log("Error creating restaurant:", err);
        res.status(500).json({
          status: "fail",
          message: "Server error in restaurant creation.",
        });
      });
  },

  // handle req-res of read operation
  GETAll: (req, res) => {
    repository
      .getRestaurants()
      .then((result) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((err) => {
        console.log("Error fetching restaurant:", err);
        res.status(500).json({
          status: "fail",
          message: " Server error in fetching restaurants.",
        });
      });
  },

  // handle req-res of update operation
  UPDATE: (req, res) => {
    const restaurantId = req.params.id;
    const updatedRestaurantData = req.body;

    repository
      .UpdateRestaurant(updatedRestaurantData, restaurantId)
      .then((result) => {
        res.status(200).json({
          status: "success",
          message: "restaurant details update successfully",
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: "fail",
          message: "something went wrong in update",
        });
      });
  },

  // handle req-res of delete opration
  DELETE: (req, res) => {
    const restaurantId = req.params.id;

    repository
      .DeleteRestaurant(restaurantId)
      .then((result) => {
        res.status(200).json({
          status: "success",
          message: "restaurant deleted ☺",
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "fail",
          message: "something went wrong in delete opration",
        });
      });
  },
};

module.exports = crudController;
