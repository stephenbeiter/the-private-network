const router = require("express").Router();
const { Post, User } = require("../models");

// render User's profile and all posts on homepage
router.get("/", async function (req, res, next) {
  // change to session once available
  // ================================
  const user = await User.findOne({
    where: {
      id: 1,
    },
    attributes: ["id", "username", "email", "password", "profile_img"],
    raw: true,
  });

  const posts = await Post.findAll({
    attributes: ["id", "title", "post_img", "user_id", "group_id", "created_at"],
    raw: true,
  });
  // remove the [0] testing
  // ======================
  res.render("feed", { posts, user });
});

module.exports = router;
