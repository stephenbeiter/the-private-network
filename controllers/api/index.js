const router = require("express").Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const groupRoutes = require('./group-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/groups', groupRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
