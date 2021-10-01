const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get users
router.get("/", (req, res) => {
console.log('');
Post.findAll({
    where: { id: req.params.id},
    attributes: [
    'id',
    'title',
    'created_at',
    'post_content'],



})




// example code
// router.get("/", (req, res) => {
//     Comment.findAll({})
//       .then((dbCommentData) => res.json(dbCommentData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });