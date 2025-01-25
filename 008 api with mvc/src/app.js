const express = require('express');
const productRouter = require('./routes/productRoutes');

const masterRouter = express.Router();

masterRouter.use('/product', productRouter);

module.exports = masterRouter;