const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv");
const connectToDB = require("./migrations/dbConnector");
const RestaurantRoutes = require("./routes/crudRoute");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

// connect to database...
connectToDB();

// routes...
app.use("/crud", RestaurantRoutes);

// server start
const port = process.env.PORT || 8900;
app.listen(port, () => {
  console.log("server started...");
});
