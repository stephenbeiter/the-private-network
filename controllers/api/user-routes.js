const router = require('express').Router();
const { User, Group } = require('../../models');

// Create user
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profile_img: req.body.profile_img
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all users
router.get('/', (req, res) => {
  User.findAll({
    include: [{
      model: Group,
      attributes: ['id', 'groupname'],
      through: { attributes: [] }
    }]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get single user
router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get Users by group
router.get('/group/:id', (req, res) => {
  Group.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: User,
      attributes: ['id', 'first_name', 'last_name', 'email', 'profile_img'],
      through: { attributes: [] }
    }]
  })
    .then(dbUserData => { res.json(dbUserData[0].users) })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update user
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete user
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;