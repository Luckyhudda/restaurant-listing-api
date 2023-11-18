const express = require("express");
const crudController = require("./../controllers/CrudController");

const router = express.Router();

// add restaurant
router.post("/add-restaurant", crudController.CREATE);

// get all restaurant list
router.get("/get-restaurants", crudController.GETAll);

module.exports = router;
