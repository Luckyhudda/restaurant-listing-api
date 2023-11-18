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
};

module.exports = crudController;
