const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    price: {type: Number},
    title: {type: String},
    description: {type: String}
}, {timestamps: true})

module.exports.Product = mongoose.model('Product', ProductSchema)