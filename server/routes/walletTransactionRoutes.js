const express = require("express");
const router = express.Router();

const {
  getWalletTransactions,
} = require("../controllers/walletTransactionController");

const { protect } = require("../middleware/authMiddleware");

router.get("/transactions", protect, getWalletTransactions);

module.exports = router;