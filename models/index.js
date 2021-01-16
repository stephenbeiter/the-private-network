const User = require('./User');
const Post = require('./Post');
const Group = require('./Group');
const Comment = require('./Comment');

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

// User and Group associations
User.belongsToMany(Group, {
  through: 'User_Groups'
});
Group.belongsToMany(User, {
  through: 'User_Groups'
});

// Post association with Comment
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// User association with Comment
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Group, Comment };