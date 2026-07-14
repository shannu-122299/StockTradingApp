const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  getUsers,
  deleteUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route
router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.get("/", protect, getUsers);

router.delete("/:id", protect, deleteUser);

module.exports = router;