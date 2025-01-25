const express = require('express');
const { createProduct, readProducts, updateProduct } = require('../controllers/productControllers');
const multerUploads = require('../middlewares/multer');

const productRouter = express.Router();
productRouter.use(multerUploads);

productRouter.post('/insert-product', createProduct);
productRouter.get('/read-products', readProducts);
productRouter.put('/update-product/:_id', updateProduct);

module.exports = productRouter;