const ProductController = require('../controllers/product.controller');
const { Product } = require('../models/product.model');

module.exports = function(app) {
    app.get('/api/allProducts', ProductController.allProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.post('/api/products', ProductController.createProduct);
}