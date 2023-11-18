const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./migrations/dbConnector");
const app = express();

dotenv.config();

// connect to database...
connectToDB();

const port = process.env.PORT || 8900;

app.listen(port, () => {
  console.log("server started...");
});
