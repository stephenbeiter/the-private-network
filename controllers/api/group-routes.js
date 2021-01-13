const router = require('express').Router();
const { Group } = require('../../models');

// GET
router.get('/', (req, res) => {
  Group.findAll({
  })
    .then(dbGroupData => res.json(dbGroupData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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

router.get('/user/:id', (req, res) => {
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

// POST
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

// PUT
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

// DELETE
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

module.exports = router;