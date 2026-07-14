const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    exchange: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stockSchema);