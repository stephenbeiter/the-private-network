const router = require('express').Router();
const { Group, User } = require('../../models');

// Create group
router.post('/', (req, res) => {
  Group.create({
    groupname: req.body.groupname,
    group_admin: req.body.group_admin,
    group_img: req.body.group_img,
    group_color: req.body.group_color
  })
    .then(dbGroupData => res.json(dbGroupData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all groups
router.get('/', (req, res) => {
  Group.findAll({
  })
    .then(dbGroupData => res.json(dbGroupData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get single group
router.get('/:id', (req, res) => {
  Group.findOne({
    where: { id: req.params.id }
  })
    .then(dbGroupData => {
      if (!dbGroupData) {
        res.status(404).json({ message: 'No Group found with this id' });
        return;
      }
      res.json(dbGroupData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get groups by admin
router.get('/admin/:id', (req, res) => {
  Group.findAll({
    where: { group_admin: req.params.id }
  })
    .then(dbGroupData => {
      if (!dbGroupData) {
        res.status(404).json({ message: 'No Group found with this id' });
        return;
      }
      res.json(dbGroupData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get groups by user
router.get('/user/:id', (req, res) => {
  User.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: Group,
      attributes: ['id', 'groupname', 'group_admin', 'group_img', 'group_color'],
      through: { attributes: [] }
    }]
  })
    .then(dbGroupData => { res.json(dbGroupData[0].groups) })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update group
router.put('/:id', (req, res) => {
  Group.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbGroupData => {
      if (!dbGroupData[0]) {
        res.status(404).json({ message: 'No Group found with this id' });
        return;
      }
      res.json(dbGroupData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete group
router.delete('/:id', (req, res) => {
  Group.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGroupData => {
      if (!dbGroupData) {
        res.status(404).json({ message: 'No Group found with this id' });
        return;
      }
      res.json(dbGroupData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete groups by admin
router.delete('/admin/:id', (req, res) => {
  Group.destroy({
    where: {
      group_admin: req.params.id
    }
  })
    .then(dbGroupData => {
      if (!dbGroupData) {
        res.status(404).json({ message: 'No Group found with this id' });
        return;
      }
      res.json(dbGroupData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;