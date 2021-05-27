const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    brand: {
      type: DataTypes.STRING,
    },

    model: {
      type: DataTypes.STRING,
    },

    year: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Product",
  }
);

module.exports = Product;
