const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const auth = require("../middleware/auth");

// Create new feedback - Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("message", "Message is required").not().isEmpty(),
  ],
  feedbackController.createFeedback
);

// Get all feedback - Private (Admin only)
router.get("/", auth, feedbackController.getAllFeedback);

module.exports = router;
