const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");
const auth = require("../middleware/auth");

// Create restaurant - Private/Admin
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
    ],
  ],
  restaurantController.createRestaurant
);

// Get all restaurants - Public
router.get("/", restaurantController.getAllRestaurants);

// Get restaurant by ID - Public
router.get("/:id", restaurantController.getRestaurantById);

// Update restaurant - Private/Owner
router.put("/:id", auth, restaurantController.updateRestaurant);

// Delete restaurant - Private/Owner
router.delete("/:id", auth, restaurantController.deleteRestaurant);

// Add menu item - Private/Owner
router.post(
  "/:id/menu",
  [
    auth,
    [
      check("name", "Item name is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("price", "Price is required").isNumeric(),
      check("category", "Category is required").not().isEmpty(),
    ],
  ],
  restaurantController.addMenuItem
);

// Add review - Private
router.post(
  "/:id/reviews",
  [
    auth,
    [
      check("rating", "Rating is required")
        .isNumeric()
        .isInt({ min: 1, max: 5 }),
      check("comment", "Comment is required").not().isEmpty(),
    ],
  ],
  restaurantController.addReview
);

module.exports = router;
