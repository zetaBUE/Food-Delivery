const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const orderController = require("../controllers/orderController");
const auth = require("../middleware/auth");

// Create new order - Private
router.post(
  "/",
  [
    auth,
    [
      check("restaurantId", "Restaurant ID is required").not().isEmpty(),
      check("items", "Items are required").isArray({ min: 1 }),
      check("items.*.quantity", "Item quantity must be at least 1").isInt({
        min: 1,
      }),
      check("deliveryAddress", "Delivery address is required").not().isEmpty(),
      check("paymentMethod", "Valid payment method is required").isIn([
        "credit_card",
        "debit_card",
        "cash",
      ]),
    ],
  ],
  orderController.createOrder
);

// Get user orders - Private
router.get("/user", auth, orderController.getUserOrders);

// Get specific order - Private
router.get("/:id", auth, orderController.getOrderById);

// Update order status - Private/Admin only
router.patch(
  "/:id/status",
  [
    auth,
    check("status", "Valid status is required").isIn([
      "pending",
      "confirmed",
      "preparing",
      "out_for_delivery",
      "delivered",
      "cancelled",
    ]),
  ],
  orderController.updateOrderStatus
);

// Cancel order - Private
router.post("/:id/cancel", auth, orderController.cancelOrder);

// Get restaurant orders - Private/Admin or Restaurant Owner
router.get(
  "/restaurant/:restaurantId",
  auth,
  orderController.getRestaurantOrders
);

module.exports = router;
