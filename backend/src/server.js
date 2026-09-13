require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = 5000;
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "MERN CRUD API is running",
  });
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Product received",
    data: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
