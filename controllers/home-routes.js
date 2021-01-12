const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// index route
router.get("/", (req, res) => res.render("index", { layout: "landing" }));

// render all posts on homepage
router.get("/posts", (req, res) => {
  Post.findAll({
    attributes: ["id"],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
