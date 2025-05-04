const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const reviewController = require("../controllers/reviewController");

// @route   GET api/reviews/restaurant/:restaurantId
// @desc    Get all reviews for a restaurant
// @access  Public
router.get("/restaurant/:restaurantId", reviewController.getRestaurantReviews);

// @route   GET api/reviews/user/:userId
// @desc    Get all reviews by a user
// @access  Private
router.get("/user/:userId", auth, reviewController.getUserReviews);

// @route   POST api/reviews
// @desc    Create a new review
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("restaurant", "Restaurant ID is required").not().isEmpty(),
      check("rating", "Rating is required and must be between 1 and 5").isInt({
        min: 1,
        max: 5,
      }),
      check("comment", "Comment is required").not().isEmpty(),
    ],
  ],
  reviewController.createReview
);

// @route   PUT api/reviews/:id
// @desc    Update a review
// @access  Private
router.put(
  "/:id",
  [
    auth,
    [
      check("rating", "Rating is required and must be between 1 and 5").isInt({
        min: 1,
        max: 5,
      }),
      check("comment", "Comment is required").not().isEmpty(),
    ],
  ],
  reviewController.updateReview
);

// @route   DELETE api/reviews/:id
// @desc    Delete a review
// @access  Private
router.delete("/:id", auth, reviewController.deleteReview);

// @route   POST api/reviews/:id/images
// @desc    Add images to a review
// @access  Private
router.post("/:id/images", auth, reviewController.addReviewImages);

// @route   DELETE api/reviews/:id/images/:imageId
// @desc    Remove an image from a review
// @access  Private
router.delete("/:id/images/:imageId", auth, reviewController.removeReviewImage);

module.exports = router;
