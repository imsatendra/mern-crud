require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = 5000;
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "MERN CRUD API is running",
  });
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
