const router = require("express").Router();
const { Post } = require("../models");

// render all posts on homepage
router.get("/", (req, res) => res.render("feed"));

module.exports = router;
