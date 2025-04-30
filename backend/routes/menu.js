const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const menuController = require("../controllers/menuController");

// @route   GET api/menu/restaurant/:restaurantId
// @desc    Get menu for a restaurant
// @access  Public
router.get("/restaurant/:restaurantId", menuController.getRestaurantMenu);

// @route   POST api/menu
// @desc    Create a new menu
// @access  Private (Restaurant Owner/Admin)
router.post(
  "/",
  [
    auth,
    [
      check("restaurant", "Restaurant ID is required").not().isEmpty(),
      check("items", "Menu items are required").isArray(),
      check("items.*.name", "Item name is required").not().isEmpty(),
      check(
        "items.*.price",
        "Item price is required and must be positive"
      ).isFloat({ min: 0 }),
      check("items.*.category", "Item category is required").isIn([
        "appetizer",
        "main course",
        "dessert",
        "beverage",
        "side dish",
      ]),
    ],
  ],
  menuController.createMenu
);

// @route   PUT api/menu/:id
// @desc    Update a menu
// @access  Private (Restaurant Owner/Admin)
router.put(
  "/:id",
  [
    auth,
    [
      check("items", "Menu items are required").isArray(),
      check("items.*.name", "Item name is required").not().isEmpty(),
      check(
        "items.*.price",
        "Item price is required and must be positive"
      ).isFloat({ min: 0 }),
      check("items.*.category", "Item category is required").isIn([
        "appetizer",
        "main course",
        "dessert",
        "beverage",
        "side dish",
      ]),
    ],
  ],
  menuController.updateMenu
);

// @route   DELETE api/menu/:id
// @desc    Delete a menu
// @access  Private (Restaurant Owner/Admin)
router.delete("/:id", auth, menuController.deleteMenu);

// @route   PUT api/menu/item/:menuId
// @desc    Add a new item to menu
// @access  Private (Restaurant Owner/Admin)
router.put(
  "/item/:menuId",
  [
    auth,
    [
      check("name", "Item name is required").not().isEmpty(),
      check("price", "Item price is required and must be positive").isFloat({
        min: 0,
      }),
      check("category", "Item category is required").isIn([
        "appetizer",
        "main course",
        "dessert",
        "beverage",
        "side dish",
      ]),
    ],
  ],
  menuController.addMenuItem
);

// @route   DELETE api/menu/item/:menuId/:itemId
// @desc    Remove an item from menu
// @access  Private (Restaurant Owner/Admin)
router.delete("/item/:menuId/:itemId", auth, menuController.removeMenuItem);

module.exports = router;
