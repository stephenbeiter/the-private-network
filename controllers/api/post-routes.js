const router = require("express").Router();
const { Post, User, Group } = require("../../models");

// Create post
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body,
    post_img: req.body.post_img,
    user_id: req.body.user_id,
    group_id: req.body.group_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: [
      "id",
      "title",
      "body",
      "post_img",
      "user_id",
      "group_id",
      "created_at",
      "updated_at",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
      {
        model: Group,
        attributes: ["groupname"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get single post
router.get("/:id", (req, res) => {
  console.log("======================");
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "body",
      "post_img",
      "user_id",
      "group_id",
      "created_at",
      "updated_at",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
      {
        model: Group,
        attributes: ["groupname"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get posts by user
router.get("/user/:id", (req, res) => {
  console.log("======================");
  Post.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "body",
      "post_img",
      "user_id",
      "group_id",
      "created_at",
      "updated_at",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
      {
        model: Group,
        attributes: ["groupname"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get posts by group
router.get("/group/:id", (req, res) => {
  console.log("======================");
  Post.findAll({
    where: {
      group_id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "body",
      "post_img",
      "user_id",
      "group_id",
      "created_at",
      "updated_at",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
      {
        model: Group,
        attributes: ["groupname"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update post
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData[0]) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete posts by user
router.delete("/user/:id", (req, res) => {
  Post.destroy({
    where: {
      user_id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No posts found from this user" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete posts by group
router.delete("/group/:id", (req, res) => {
  Post.destroy({
    where: {
      group_id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No posts found from this group" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
