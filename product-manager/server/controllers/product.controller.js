const {Product} = require('../models/product.model')

module.exports.createProduct = (request, response) => {
    const {price, title, description} = request.body;
    Product.create({
        price,
        title,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.json(err))
}