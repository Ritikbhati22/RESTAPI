const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Must Be Require"],
  },
  price: {
    type: Number,
    required: [true, "Price Must Be Require"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createrat: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    type: String,
    enum: {
      values: ["Apple", "Samsung", "MI", "Dell"],
      message: `{VALUE} is not supported`,
    },
  },
});
module.exports = mongoose.model("testing", productschema);
