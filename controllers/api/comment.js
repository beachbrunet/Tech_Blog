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
router.post('/', withAuth (req, res) => {
    if (req.session) {
        comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            // need user b/c we are using the id from the session
            user_id: req.session.user_id,
        })
        .then(db => res.json(db))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }
});

// example code
router.post("/", async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });


// delete