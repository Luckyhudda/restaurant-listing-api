const express = require("express");
const crudController = require("./../controllers/CrudController");

const router = express.Router();

// add restaurant
router.post("/add-restaurant", crudController.CREATE);

module.exports = router;
