const router = require("express").Router();
const { Post, User, Group, Comment } = require("../models");
// filtering a query
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// render User's profile and all posts on homepage
router.get("/", async function (req, res) {
  const user = await User.findOne({
    where: {
<<<<<<< HEAD
      // remove hardcoding
      id: 1,
=======
      id: req.session.id,
>>>>>>> feature/sessions
    },
    attributes: ["id", "first_name", "last_name", "email", "password", "profile_img"],
    raw: true,
  });

  const postsRaw = await Post.findAll({
    attributes: ["id", "title", "body", "post_img", "user_id", "group_id", "created_at"],
    order: [["created_at", "Desc"]],
    include: [
      {
        model: User,
        attributes: ["id", "first_name", "last_name"],
      },
      {
        model: Group,
        attributes: ["id", "groupname"],
      },
      {
        model: Comment,
        attributes: ["id", "body", "comment_img", "post_id"],
        include: {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      },
    ],
  });

  const groups = await Group.findAll({
    attributes: ["id", "groupname", "group_admin", "group_img", "group_color", "created_at"],
    raw: true,
  });

  const posts = postsRaw.map((post) => post.get({ plain: true }));
  console.log(posts[0].comments);
  res.render("feed", { posts, user, groups });
});

router.get("/search", async function (req, res) {
  const { term } = req.query;

  const filteredPostsRaw = await Post.findAll({
    where: {
      title: {
        [Op.like]: `%${term.toLowerCase()}%`,
      },
    },
    attributes: ["id", "title", "body", "post_img", "user_id", "group_id", "created_at"],
    order: [["created_at", "Desc"]],
    include: [
      {
        model: User,
        attributes: ["id", "first_name", "last_name"],
      },
      {
        model: Group,
        attributes: ["id", "groupname"],
      },
      {
        model: Comment,
        attributes: ["id", "body", "comment_img", "post_id"],
        include: {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      },
    ],
  });

  const posts = filteredPostsRaw.map((post) => post.get({ plain: true }));

  res.render("feed", { posts });
});

module.exports = router;
