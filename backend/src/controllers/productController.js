const Product = require("../models/Product");

createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await Product.create({
      name,
      price,
      category,
    });

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Product fetched successfully",
      data: products,
    });
  } catch (error) {
    res.staus(500).json({
      message: "Failed to fetched Products",
      error: error.message,
    });
  }
};

module.exports = { createProduct, getProducts };
