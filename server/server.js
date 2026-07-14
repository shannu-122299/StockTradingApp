const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const stockRoutes = require("./routes/stockRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const walletTransactionRoutes = require("./routes/walletTransactionRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/stocks", stockRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/wallet", walletTransactionRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Stock Trading API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});