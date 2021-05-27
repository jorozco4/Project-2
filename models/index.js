const Review = require("./review");
const Product = require("./product");
const User = require("./user");

Product.belongsTo(User, {
  foreignKey: "user_id",
});

Product.hasMany(Review, {
  foreignKey: "product_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Review,
  Product,
};
