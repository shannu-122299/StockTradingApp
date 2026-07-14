const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    symbol: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    buyPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);