const Category = require("../models/Category");
const Restaurant = require("../models/Restaurant");
const { validationResult } = require("express-validator");

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true })
      .populate("restaurants", "name image")
      .sort({ order: 1 });

    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get category by ID
// @route   GET /api/categories/:id
// @access  Public
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
      .populate("restaurants", "name image")
      .populate("menuItems", "name price");

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Create a new category
// @route   POST /api/categories
// @access  Private (Admin)
exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const newCategory = new Category({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image || "",
      parentCategory: req.body.parentCategory,
      order: req.body.order || 0,
    });

    const category = await newCategory.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private (Admin)
exports.updateCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    category.name = req.body.name;
    category.description = req.body.description;
    category.image = req.body.image || category.image;
    category.parentCategory = req.body.parentCategory;
    category.order = req.body.order || category.order;

    await category.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private (Admin)
exports.deleteCategory = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    // Instead of deleting, mark as inactive
    category.isActive = false;
    await category.save();

    res.json({ msg: "Category deactivated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Search categories
// @route   GET /api/categories/search/:query
// @access  Public
exports.searchCategories = async (req, res) => {
  try {
    const categories = await Category.find(
      { $text: { $search: req.params.query }, isActive: true },
      { score: { $meta: "textScore" } }
    )
      .sort({ score: { $meta: "textScore" } })
      .limit(10);

    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Add restaurants to category
// @route   PUT /api/categories/:id/restaurants
// @access  Private (Admin)
exports.addRestaurantsToCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    // Verify all restaurants exist
    const restaurants = await Restaurant.find({
      _id: { $in: req.body.restaurants },
    });
    if (restaurants.length !== req.body.restaurants.length) {
      return res.status(400).json({ msg: "One or more restaurants not found" });
    }

    // Add restaurants to category
    category.restaurants = [
      ...new Set([...category.restaurants, ...req.body.restaurants]),
    ];
    await category.save();

    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Remove restaurants from category
// @route   DELETE /api/categories/:id/restaurants
// @access  Private (Admin)
exports.removeRestaurantsFromCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user is admin
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    // Remove restaurants from category
    category.restaurants = category.restaurants.filter(
      (restaurant) => !req.body.restaurants.includes(restaurant.toString())
    );

    await category.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
