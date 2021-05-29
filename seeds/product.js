const { Product } = require("../models");

const productData = [
  {
    brand: "Reebok",
    name: "Classic",
    year: 2021,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
