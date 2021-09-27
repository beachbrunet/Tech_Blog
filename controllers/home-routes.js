// User, Post, Comment - variables and routes
const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const sequelize = require("../config/connection");

// Starting here --- techBlog_db
router.get("/", async (req, res) => {
  console.log(req.session);

  Post.findAll({
    // per told via TA
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: [["id", "post_id", "created_at", "post_content"]],
        inlcude: {
          model: User,
          attributes: ["username"],
        },
        // would like to add a socialmedia attribute as a future feature.
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login and signup
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

// example code
// const galleries = dbGalleryData.map((gallery) =>
// gallery.get({ plain: true })
// );

// res.render('homepage', {
// galleries,
// loggedIn: req.session.loggedIn,
// });
// } catch (err) {
// console.log(err);
// res.status(500).json(err);
// }
// });

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

// Pusedo Code
// MVP
// Has a homepage
// links work and the navigation
// sign in page
// sign up page

// Features
// home page includes: existing blog posts if any have been posted;
// navigation links for the homepage and the dashboard; and the option to log in
