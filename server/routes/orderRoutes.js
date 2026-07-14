const express = require("express");
const router = express.Router();

const { 
    buyStock,
    sellStock,
    getOrders,
    getAllOrders,
    deleteOrder,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.post("/buy", protect, buyStock);
router.post("/sell", protect, sellStock);

// User's own order history
router.get("/", protect, getOrders);

// Admin - all orders
router.get("/all", protect, getAllOrders);

router.delete("/:id", protect, deleteOrder);

module.exports = router;