const express = require("express");
const cors = require('cors')
const connectToDB = require("./migrations/dbConnector");
const RestaurantRoutes = require("./routes/crudRoute");
const app = express();
app.use(express.json());
app.use(cors())

// connect to database...
connectToDB();

// routes...
app.use("/crud", RestaurantRoutes);

// server start
const port =  8900;
app.listen(port, () => {
  console.log("server started...");
});
