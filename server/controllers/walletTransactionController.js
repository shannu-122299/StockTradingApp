const WalletTransaction = require("../models/WalletTransaction");

const getWalletTransactions = async (req, res) => {
  try {
    const transactions = await WalletTransaction.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getWalletTransactions,
};