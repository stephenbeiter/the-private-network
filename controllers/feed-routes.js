const router = require("express").Router();
const { Post, User, Group, Comment } = require("../models");
// filtering a query
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const includedModels = [
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
];

const postAttributes = ["id", "title", "body", "post_img", "user_id", "group_id", "created_at"];

// render User's profile and all posts on homepage
router.get("/", async function (req, res) {
  const user = await User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: ["id", "first_name", "last_name", "email", "password", "profile_img"],
    raw: true,
  });

  const postsRaw = await Post.findAll({
    attributes: postAttributes,
    order: [["created_at", "Desc"]],
    include: includedModels,
  });

  const groups = await Group.findAll({
    attributes: ["id", "groupname", "group_admin", "group_img", "group_color", "created_at"],
    raw: true,
  });

  const posts = postsRaw.map((post) => post.get({ plain: true }));

  res.render("feed", { posts, user, groups, feed: true });
});

router.get("/search/post", async function (req, res) {
  const { term } = req.query;

  const filteredPostsRaw = await Post.findAll({
    where: {
      title: {
        [Op.like]: `%${term.toLowerCase()}%`,
      },
    },
    attributes: postAttributes,
    order: [["created_at", "Desc"]],
    include: includedModels,
  });

  const posts = filteredPostsRaw.map((post) => post.get({ plain: true }));

  res.render("feed", { posts });
});

router.get("/search/user", async function (req, res) {
  const { username } = req.query;

  const user = await User.findOne({
    where: {
      [Op.or]: [
        {
          first_name: {
            [Op.like]: `%${username.toLowerCase()}%`,
          },
        },
        {
          last_name: {
            [Op.like]: `%${username.toLowerCase()}%`,
          },
        },
      ],
    },
    attributes: ["id", "first_name", "last_name", "email", "password", "profile_img"],
    raw: true,
  });

  res.render("profile", { user });
});

router.get("/groups/:id", async function (req, res) {
  const filteredPostsRaw = await Post.findAll({
    where: {
      group_id: req.params.id,
    },
    attributes: postAttributes,
    order: [["created_at", "Desc"]],
    include: includedModels,
  });

  const posts = filteredPostsRaw.map((post) => post.get({ plain: true }));

  res.render("feed", { posts, groupPage: true });
});

router.get("/users/:id", async function (req, res) {
  const filteredPostsRaw = await Post.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: postAttributes,
    order: [["created_at", "Desc"]],
    include: includedModels,
  });

  const posts = filteredPostsRaw.map((post) => post.get({ plain: true }));

  res.render("feed", { posts, userPosts: true });
});
router.get("/profile/:id", async function (req, res) {
  const filteredPostsRaw = await Post.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: postAttributes,
    order: [["created_at", "Desc"]],
    include: includedModels,
  });

  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "first_name", "last_name", "email", "password", "profile_img"],
    raw: true,
  });

  const posts = filteredPostsRaw.map((post) => post.get({ plain: true }));

  res.render("profile", { posts, user, profile: true });
});

module.exports = router;
