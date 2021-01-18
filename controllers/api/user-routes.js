const router = require('express').Router();
const { User, Group, User_Groups } = require('../../models');

// Create user
router.post('/', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    profile_img: req.body.profile_img
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
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

// Add user to group
router.post('/addgroup', async function (req, res) {
  const user = await User.findOne({ where: { id: req.body.user_id } }).then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    return dbUserData;
  });
  const group = await Group.findOne({ where: { id: req.body.group_id } }).then(dbGroupData => {
    if (!dbGroupData) {
      res.status(404).json({ message: 'No group found with this id' });
      return;
    }
    return dbGroupData;
  })
  user.addGroups(group);
  res.json({ message: 'user added to group' });
});

module.exports = router;