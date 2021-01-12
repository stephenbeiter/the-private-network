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

// POST
router.post('/', (req, res) => {
  console.log(req.headers);
  Group.create({
    groupname: req.body.groupname,
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