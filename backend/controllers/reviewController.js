const Review = require("../models/Review");
const Restaurant = require("../models/Restaurant");
const { validationResult } = require("express-validator");

// @desc    Get all reviews for a restaurant
// @route   GET /api/reviews/restaurant/:restaurantId
// @access  Public
exports.getRestaurantReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ restaurant: req.params.restaurantId })
      .populate("user", "name avatar")
      .sort({ date: -1 });

    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get all reviews by a user
// @route   GET /api/reviews/user/:userId
// @access  Private
exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.params.userId })
      .populate("restaurant", "name image")
      .sort({ date: -1 });

    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Create a new review
// @route   POST /api/reviews
// @access  Private
exports.createReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const restaurant = await Restaurant.findById(req.body.restaurant);
    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurant not found" });
    }

    // Check if user has already reviewed this restaurant
    const existingReview = await Review.findOne({
      user: req.user.id,
      restaurant: req.body.restaurant,
    });

    if (existingReview) {
      return res
        .status(400)
        .json({ msg: "You have already reviewed this restaurant" });
    }

    const newReview = new Review({
      user: req.user.id,
      restaurant: req.body.restaurant,
      rating: req.body.rating,
      comment: req.body.comment,
      foodRating: req.body.foodRating,
      serviceRating: req.body.serviceRating,
      ambianceRating: req.body.ambianceRating,
      images: req.body.images || [],
      order: req.body.order,
    });

    const review = await newReview.save();
    await review.populate("user", "name avatar");
    await review.populate("restaurant", "name image");

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private
exports.updateReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    // Check if user owns the review
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    review.rating = req.body.rating;
    review.comment = req.body.comment;
    review.foodRating = req.body.foodRating;
    review.serviceRating = req.body.serviceRating;
    review.ambianceRating = req.body.ambianceRating;

    await review.save();
    await review.populate("user", "name avatar");
    await review.populate("restaurant", "name image");

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    // Check if user owns the review
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await review.remove();
    res.json({ msg: "Review removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Add images to a review
// @route   POST /api/reviews/:id/images
// @access  Private
exports.addReviewImages = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    // Check if user owns the review
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    review.images = [...review.images, ...req.body.images];
    await review.save();

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Remove an image from a review
// @route   DELETE /api/reviews/:id/images/:imageId
// @access  Private
exports.removeReviewImage = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    // Check if user owns the review
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    review.images = review.images.filter(
      (image) => image !== req.params.imageId
    );
    await review.save();

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
