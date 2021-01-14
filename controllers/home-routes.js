const router = require("express").Router();
const { Post } = require("../models");

// index route
router.get("/", (req, res) => res.render("index", { layout: "landing" }));

// signup route
router.get("/signup", (req, res) => {
  res.render("signup", { layout: "landing" });
});

// login route
router.get("/login", (req, res) => {
  res.render("login", { layout: "landing" });
});

module.exports = router;
