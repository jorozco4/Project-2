const Review = require("./review");
const Comment = require("./comment");
const User = require("./user");

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Review.hasMany(Comment, {
  foreignKey: "review_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Review, {
  foreignKey: "review_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Review,
  Comment,
};
