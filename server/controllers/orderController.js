const Portfolio = require("../models/Portfolio");
const Order = require("../models/Order");
const User = require("../models/User");

const buyStock = async (req, res) => {
  try {
    const { symbol, company, quantity, price } = req.body;

    const total = quantity * price;

    const user = await User.findById(req.user._id);

    if (user.balance < total) {
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    user.balance -= total;
    await user.save();

    const existingStock = await Portfolio.findOne({
      user: req.user._id,
      symbol,
    });

    if (existingStock) {
      existingStock.quantity += quantity;
      await existingStock.save();
    } else {
      await Portfolio.create({
        user: req.user._id,
        symbol,
        company,
        quantity,
        buyPrice: price,
      });
    }

    await Order.create({
      user: req.user._id,
      symbol,
      company,
      quantity,
      price,
      orderType: "BUY",
    });

    res.json({
      message: "Stock Purchased Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const sellStock = async (req, res) => {
  try {
    const { symbol, quantity, price } = req.body;

    const portfolio = await Portfolio.findOne({
      user: req.user._id,
      symbol,
    });

    if (!portfolio) {
      return res.status(400).json({
        message: "Stock not found in portfolio",
      });
    }

    if (portfolio.quantity < quantity) {
      return res.status(400).json({
        message: "Not enough stocks to sell",
      });
    }

    portfolio.quantity -= quantity;

    if (portfolio.quantity === 0) {
      await portfolio.deleteOne();
    } else {
      await portfolio.save();
    }

    const user = await User.findById(req.user._id);

    user.balance += quantity * price;
    await user.save();

    await Order.create({
      user: req.user._id,
      symbol,
      company: portfolio.company,
      quantity,
      price,
      orderType: "SELL",
    });

    res.json({
      message: "Stock Sold Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.json({
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  buyStock,
  sellStock,
  getOrders,
  getAllOrders,
  deleteOrder,
};