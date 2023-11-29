const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    required: true,
  },

  description: {
    type: String,
    lowercase: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  discountPercentage: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});

const product = mongoose.model("product", productSchema);
module.exports = { product };
