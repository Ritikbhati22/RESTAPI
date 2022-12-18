require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const Testing = require("./models/testing")
const productjson = require("./product.json");
const testingjson = require("./testing.json");

start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(productjson);
    await Testing.create(testingjson);
    console.log("success");
  } catch (error) {
    console.log("error");
  }
};

start();
