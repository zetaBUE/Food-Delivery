const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({ msg: "Not authorized as admin" });
  }
};

module.exports = admin;
