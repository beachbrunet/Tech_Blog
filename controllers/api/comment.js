// get, post, delete
const router = require("express").Router();
const { Comment } = require("../models");
const withAuth = require("../utils/authentication");

// get
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post
router.post("/", withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // need user b/c we are using the id from the session
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// example code
// router.post("/", async (req, res) => {
//     try {
//       const userData = await User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       });

//     }
// delete
router.delete('/', withAuth, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        })
        .then(dbCommentData => {
            if (!dbCommentData) {
            res
              .status(400)
              .json({ message: "Incorrect email or password. Please try again!" });
            return;
          }



        })
