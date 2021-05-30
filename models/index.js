const Review = require("./Review");
const Product = require("./Product");
const User = require("./User");

Review.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete:'cascade'
});

Product.hasMany(Review, {
  foreignKey: "product_id",
  onDelete:'cascade'
});

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete:'cascade'
});

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete:'cascade'
});

module.exports = {
  User,
  Review,
  Product,
};
