const router = require("express").Router();
const { Post } = require("../models");

// index route
router.get("/", (req, res) => res.render("index", { layout: "landing" }));

// render all posts on homepage
router.get("/posts", (req, res) => {
  Post.findAll({
    attributes: ["id", "username", "email", "profile_img"],
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

// signup route
router.get("/signup", (req, res) => {
  res.render("signup", { layout: "landing" });
});

// login route
router.get("/login", (req, res) => {
  res.render("login", { layout: "landing" });
});

module.exports = router;
