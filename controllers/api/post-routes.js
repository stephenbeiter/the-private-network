const router = require('express').Router();
const { Post, User, Group } = require('../../models');

// Get
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: ['id', 'title', 'post_url', 'post_img', 'user_id', 'group_id', 'created_at', 'updated_at'],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   },
    //   {
    //     model: Group,
    //     attributes: ['groupname']
    //   }
    // ]
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  console.log('======================');
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'post_url', 'post_img', 'user_id', 'group_id', 'created_at', 'updated_at'],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   },
    //   {
    //     model: Group,
    //     attributes: ['groupname']
    //   }
    // ]
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/user/:id', (req, res) => {
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.params.id
    },
    attributes: ['id', 'title', 'post_url', 'post_img', 'user_id', 'group_id', 'created_at', 'updated_at'],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   },
    //   {
    //     model: Group,
    //     attributes: ['groupname']
    //   }
    // ]
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/group/:id', (req, res) => {
  console.log('======================');
  Post.findAll({
    where: {
      group_id: req.params.id
    },
    attributes: ['id', 'title', 'post_url', 'post_img', 'user_id', 'group_id', 'created_at', 'updated_at'],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   },
    //   {
    //     model: Group,
    //     attributes: ['groupname']
    //   }
    // ]
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    post_img: req.body.post_img,
    user_id: req.body.user_id,
    group_id: req.body.group_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT
router.put('/:id', (req, res) => {
  Post.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData[0]) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/user/:id', (req, res) => {
  Post.destroy({
    where: {
      user_id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/group/:id', (req, res) => {
  Post.destroy({
    where: {
      group_id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;