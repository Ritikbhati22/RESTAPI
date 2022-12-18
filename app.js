require("dotenv").config()
const express = require("express");
const app = express();
const routes = require("./routes/product");
const connectDB = require("./db/connect")

app.get("/", (req, res) => {
  res.send("Hi I am Ritik Bhati");
});
app.use("/api/products", routes );
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    app.listen(4000, () => {
      console.log(`Server is Running on 4000`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
