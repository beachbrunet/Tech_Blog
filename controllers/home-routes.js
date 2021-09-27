const router = require("express").Router();
// User, Post, Comment
const { User, Post, Comment } = require("../models");
const bcrypt = require("bcrypt");
const { request, response } = require('express');

//Base code
router.get("/", async (req, res) => {
  try {
    const  = await Post.findAll({
      include: [
        {
          model: Painting,
          attributes: ["filename", "description"],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    res.render("homepage", {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// comments

// login, should redirect if already logged in

// sign up
router.get('signup', async (request, response) => {
  try {
      response.render('signup', { logged_in: request.session.logged_in })
  } catch (err) {
      console.log(err);
      response.status(500).json(err);
  }
})

module.export = router;