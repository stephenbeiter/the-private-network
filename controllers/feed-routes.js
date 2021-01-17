const router = require("express").Router();
const { Post, User, Group, Comment } = require("../models");

// render User's profile and all posts on homepage
router.get("/", async function (req, res, next) {
  // change to session once available
  // ================================
  const user = await User.findOne({
    where: {
      id: 1,
    },
    attributes: ["id", "first_name", "last_name", "email", "password", "profile_img"],
    raw: true,
  });

  const posts = await Post.findAll({
    attributes: ["id", "title", "body", "post_img", "user_id", "group_id", "created_at"],
    order: [["created_at", "Desc"]],
    raw: true,
  });

  const groups = await Group.findAll({
    attributes: ["id", "groupname", "group_admin", "group_img", "group_color", "created_at"],
    raw: true,
  });

  const comments = await Comment.findAll({
    where: {
      //   update testing
      // =================
      post_id: 1,
    },
    attributes: ["id", "body", "user_id", "post_id", "created_at", "comment_img"],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],

    raw: true,
  });
  console.log(posts, comments);
  res.render("feed", { posts, user, groups, comments });
});

module.exports = router;
