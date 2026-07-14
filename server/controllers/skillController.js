const Skill = require("../models/Skill");

// Add Skill
const addSkill = async (req, res) => {
  try {
    const { title, description, category, level } = req.body;

    const skill = await Skill.create({
      title,
      description,
      category,
      level,
      user: req.user.id,
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user.id });

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Skill
const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    // Check ownership
    if (skill.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedSkill);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Skill
const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    await Skill.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Skill Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
};