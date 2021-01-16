const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Create Comment
router.post('/', (req, res) => {
  Comment.create({
    body: req.body.body,
    comment_img: req.body.post_img,
    user_id: req.body.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all Comments
router.get('/', (req, res) => {
  console.log('======================');
  Comment.findAll({
    attributes: ['id', 'body', 'comment_img', 'user_id', 'post_id', 'created_at', 'updated_at']
  }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get single Comment
router.get('/:id', (req, res) => {
  console.log('======================');
  Comment.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'body', 'comment_img', 'user_id', 'post_id', 'created_at', 'updated_at']
  }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get Comments by user
router.get('/user/:id', (req, res) => {
  console.log('======================');
  Comment.findAll({
    where: {
      user_id: req.params.id
    },
    attributes: ['id', 'body', 'comment_img', 'user_id', 'post_id', 'created_at', 'updated_at'],
    include: [
      {
        model: User,
        attributes: ['first_name']
      }
    ]
  }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get Comments by post
router.get('/post/:id', (req, res) => {
  console.log('======================');
  Comment.findAll({
    where: {
      post_id: req.params.id
    },
    attributes: ['id', 'body', 'comment_img', 'user_id', 'post_id', 'created_at', 'updated_at'],
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Post,
        attributes: ['title', 'created_at']
      }
    ]
  }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update Comment
router.put('/:id', (req, res) => {
  Comment.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData[0]) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete Comment
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete Comments by user
router.delete('/user/:id', (req, res) => {
  Comment.destroy({
    where: {
      user_id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comments found from this user' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete Comments by post
router.delete('/post/:id', (req, res) => {
  Comment.destroy({
    where: {
      post_id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comments found from this post' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;