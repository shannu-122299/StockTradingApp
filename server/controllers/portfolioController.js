const Portfolio = require("../models/Portfolio");

const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({
      user: req.user._id,
    });

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPortfolio,
};