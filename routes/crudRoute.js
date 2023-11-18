const express = require("express");
const crudController = require("./../controllers/CrudController");

const router = express.Router();

// add restaurant
router.post("/add-restaurant", crudController.CREATE);

// get all restaurant list
router.get("/get-restaurants", crudController.GETAll);

// update a restaurant details
router.put("/update-restaurant/:id", crudController.UPDATE);

// delete a restaurant from list
router.delete("/delete-restaurant/:id", crudController.DELETE);

module.exports = router; 
