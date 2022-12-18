const Product = require("../models/product");
const Testing = require("../models/testing");
const getallproducts = async (req, res) => {
  const data = await Product.find({});
  res.status(200).json({ data });
};
const getalltesting = async (req, res) => {
  const data = await Testing.find({});
  res.status(200).json({ data });
};
module.exports = { getalltesting, getallproducts };
