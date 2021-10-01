// get, post, delete
const router = require("express").Router();
const {Comment } = require("../models");
const withAuth = require("../utils/authentication");

// get
router.get('/', (req, res) => {
    comment.findAll({})
    .then(db => res.json(db))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
// post
router.post('/', async (req, res) => {
    comment.findAll({})
    .then(db => res.json(db))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
}

router.post("/", async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });


// delete