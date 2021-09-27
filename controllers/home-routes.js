// User, Post, Comment
const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const bcrypt = require("bcrypt");

//Base code
// router.get('/gallery/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     // If the user is logged in, allow them to view the gallery
//     try {
//       const dbGalleryData = await Gallery.findByPk(req.params.id, {
//         include: [
//           {
//             model: Painting,
//             attributes: [
//               'id',
//               'title',
//               'artist',
//               'exhibition_date',
//               'filename',
//               'description',
//             ],
//           },
//         ],
//       });
//       const gallery = dbGalleryData.get({ plain: true });
//       res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

// Starting here
router.get("/", (req, res) => {
  console.log(req.session);
  Post.FindAll({
    // per told via TA
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: [["id", "title", "created_at", "post_content"]],
      },
    ],
  });
});

// This is signup example code
// router.get("signup", async (request, response) => {
//   try {
//     response.render("signup", { logged_in: request.session.logged_in });
//   } catch (err) {
//     console.log(err);
//     response.status(500).json(err);
//   }
// });

module.export = router;
