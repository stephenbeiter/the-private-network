const User = require('./User');
const Post = require('./Post');
const Group = require('./Group');

// User association with Post
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Group association with Post
Group.hasMany(Post, {
  foreignKey: 'group_id'
});

Post.belongsTo(Group, {
  foreignKey: 'group_id'
});

// User association with Group
User.belongsToMany(Group, {
  through: 'User_Groups'
});

// Group association with User
Group.belongsToMany(User, {
  through: 'User_Groups'
});

module.exports = { User, Post, Group };