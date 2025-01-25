const express = require('express');
require('dotenv').config();
require('./src/db/config');

const app = express();
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});