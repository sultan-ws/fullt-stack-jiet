const express = require('express');
const masterRouter = require('./src/app');
require('dotenv').config();
require('./src/db/config');

const {PORT} = process.env;
const app = express();

app.use('/product-files', express.static('./src/files'));
app.use('/api', masterRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})



// https://github.com/sultan-ws/web-dev-jiet/