const Post = require("./post");
const Comment = require("./comment");
const User = require("./user");

Post.hasMany(Comment, {
  foreignKey: "postId",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Post, {
  foreignKey: "postId",
});

User.hasMany(Comment, {
  foreignKey: "userId",
});

module.exports = {
  User,
  Post,
  Comment,
};
