const Stock = require("../models/Stock");

// Get all stocks
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();

    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create new stock
const createStock = async (req, res) => {
  try {
    const { exchange, company, symbol, type, price } = req.body;

    const stockExists = await Stock.findOne({ symbol });

    if (stockExists) {
      return res.status(400).json({
        message: "Stock already exists",
      });
    }

    const stock = await Stock.create({
      exchange,
      company,
      symbol,
      type,
      price,
    });

    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    res.status(200).json({
      message: "Stock Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
};