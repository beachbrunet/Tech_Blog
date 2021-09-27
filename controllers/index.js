// boilerplate code
const router = require("express").Router();
const userRoutes = require("./api");
const userRoutes = require("./dashboard-route");
const userRoutes = require("./dashboard-route");

router.use("/users", userRoutes);
router.use("/users", userRoutes);
router.use("/users", userRoutes);

// added error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
