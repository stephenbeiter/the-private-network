const router = require("express").Router();
const { Post, User, Group } = require("../models");

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

  const groups = await Group.findAll({
    attributes: ["id", "groupname", "group_admin", "group_img", "group_color", "created_at"],
    raw: true,
  });

  res.render("feed", { posts, user, groups });
});

module.exports = router;
