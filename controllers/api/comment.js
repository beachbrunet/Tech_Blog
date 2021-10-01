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
}

// post


// delete