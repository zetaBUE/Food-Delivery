const Order = require("../models/Order");
const Restaurant = require("../models/Restaurant");
const { validationResult } = require("express-validator");

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      restaurantId,
      items,
      deliveryAddress,
      paymentMethod,
      deliveryInstructions,
    } = req.body;

    // Verify restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    // Create new order
    const order = new Order({
      user: req.user._id,
      restaurant: restaurantId,
      items,
      deliveryAddress,
      paymentMethod,
      deliveryInstructions,
      estimatedDeliveryTime: new Date(Date.now() + 45 * 60000), // 45 minutes from now
    });

    await order.save();

    // Populate necessary fields
    await order.populate("restaurant", "name");
    await order.populate("user", "name email");

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("restaurant", "name")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("restaurant", "name")
      .populate("user", "name email");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Check if user is authorized to view this order
    if (
      order.user._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ error: "Not authorized" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Only admin or restaurant owner can update order status
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Not authorized" });
    }

    order.status = status;
    if (status === "delivered") {
      order.actualDeliveryTime = new Date();
    }

    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Cancel order
exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Only allow cancellation if order is pending or confirmed
    if (!["pending", "confirmed"].includes(order.status)) {
      return res
        .status(400)
        .json({ error: "Order cannot be cancelled at this stage" });
    }

    // Check if user is authorized to cancel this order
    if (
      order.user.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ error: "Not authorized" });
    }

    order.status = "cancelled";
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get restaurant orders (for restaurant owners/admin)
exports.getRestaurantOrders = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    // Verify restaurant exists and user has access
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    if (
      restaurant.owner.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ error: "Not authorized" });
    }

    const orders = await Order.find({ restaurant: restaurantId })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
