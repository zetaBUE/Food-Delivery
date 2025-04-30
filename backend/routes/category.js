const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const categoryController = require("../controllers/categoryController");

// @route   GET api/categories
// @desc    Get all categories
// @access  Public
router.get("/", categoryController.getAllCategories);

// @route   GET api/categories/:id
// @desc    Get category by ID
// @access  Public
router.get("/:id", categoryController.getCategoryById);

// @route   POST api/categories
// @desc    Create a new category
// @access  Private (Admin)
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("parentCategory", "Parent category must be a valid ID")
        .optional()
        .isMongoId(),
    ],
  ],
  categoryController.createCategory
);

// @route   PUT api/categories/:id
// @desc    Update a category
// @access  Private (Admin)
router.put(
  "/:id",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("parentCategory", "Parent category must be a valid ID")
        .optional()
        .isMongoId(),
    ],
  ],
  categoryController.updateCategory
);

// @route   DELETE api/categories/:id
// @desc    Delete a category
// @access  Private (Admin)
router.delete("/:id", auth, categoryController.deleteCategory);

// @route   GET api/categories/search/:query
// @desc    Search categories
// @access  Public
router.get("/search/:query", categoryController.searchCategories);

// @route   PUT api/categories/:id/restaurants
// @desc    Add restaurants to category
// @access  Private (Admin)
router.put(
  "/:id/restaurants",
  [
    auth,
    [
      check("restaurants", "Restaurants must be an array of IDs").isArray(),
      check("restaurants.*", "Each restaurant must be a valid ID").isMongoId(),
    ],
  ],
  categoryController.addRestaurantsToCategory
);

// @route   DELETE api/categories/:id/restaurants
// @desc    Remove restaurants from category
// @access  Private (Admin)
router.delete(
  "/:id/restaurants",
  [
    auth,
    [
      check("restaurants", "Restaurants must be an array of IDs").isArray(),
      check("restaurants.*", "Each restaurant must be a valid ID").isMongoId(),
    ],
  ],
  categoryController.removeRestaurantsFromCategory
);

module.exports = router;
