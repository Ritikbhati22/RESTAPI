const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = (uri) => {
    // console.log("connectdb")
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports=connectDB;