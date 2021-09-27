// boilerplate code
const router = require("express").Router();
const userRoutes = require("./comment");
const userRoutes = require("./post");
const userRoutes = require("./user");

router.use("/comment", comment);
router.use("/post", post);
router.use("/users", users);

module.exports = router;
