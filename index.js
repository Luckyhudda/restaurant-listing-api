const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 8900

app.listen(port,() => {
    console.log('server started...');
});