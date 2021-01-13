// const router = require('express').Router();
// const { Usergroup } = require('../../models');

// // GET
// router.get('/', (req, res) => {
//   Usergroup.findAll()
//     .then(dbUsergroupData => res.json(dbUsergroupData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/user/:id', (req, res) => {
//   Usergroup.findAll({
//     where: { user_id: req.params.id }
//   })
//     .then(dbUsergroupData => {
//       if (!dbUsergroupData) {
//         res.status(404).json({ message: 'No Usergroup found with this id' });
//         return;
//       }
//       res.json(dbUsergroupData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/group/:id', (req, res) => {
//   Usergroup.findAll({
//     where: { group_id: req.params.id }
//   })
//     .then(dbUsergroupData => {
//       if (!dbUsergroupData) {
//         res.status(404).json({ message: 'No Usergroup found with this id' });
//         return;
//       }
//       res.json(dbUsergroupData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // POST
// router.post('/', (req, res) => {
//   Usergroup.create({
//     user_id: req.body.user_id,
//     group_id: req.body.group_id,
//   })
//     .then(dbUsergroupData => res.json(dbUsergroupData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // DELETE
// router.delete('/', (req, res) => {
//   Usergroup.destroy({
//     where: {
//       user_id: req.body.user_id,
//       group_id: req.body.group_id
//     }
//   })
//     .then(dbUsergroupData => {
//       if (!dbUsergroupData) {
//         res.status(404).json({ message: 'No Usergroup found with this id' });
//         return;
//       }
//       res.json(dbUsergroupData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/group/:id', (req, res) => {
//   Usergroup.destroy({
//     where: {
//       group_id: req.params.id
//     }
//   })
//     .then(dbUsergroupData => {
//       if (!dbUsergroupData) {
//         res.status(404).json({ message: 'No Usergroup found with this id' });
//         return;
//       }
//       res.json(dbUsergroupData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/user/:id', (req, res) => {
//   Usergroup.destroy({
//     where: {
//       user_id: req.params.id
//     }
//   })
//     .then(dbUsergroupData => {
//       if (!dbUsergroupData) {
//         res.status(404).json({ message: 'No Usergroup found with this id' });
//         return;
//       }
//       res.json(dbUsergroupData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;