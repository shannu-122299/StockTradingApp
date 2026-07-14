const express = require("express");
const router = express.Router();

const {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const { protect } = require("../middleware/authMiddleware");

// Protected Routes
router.post("/", protect, addSkill);
router.get("/", protect, getSkills);
router.put("/:id", protect, updateSkill);
router.delete("/:id", protect, deleteSkill);

module.exports = router;