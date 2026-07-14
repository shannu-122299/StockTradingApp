const User = require("../models/User");
const Order = require("../models/Order");
const Portfolio = require("../models/Portfolio");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalPortfolios = await Portfolio.countDocuments();

    res.json({
      totalUsers,
      totalOrders,
      totalPortfolios,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};