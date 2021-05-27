const { Product } = require("../models");

const productData = [
  {
    review: "This shoe is amazing!!",
    rating: 1,
    user_id: 3,
  },
  {
    review: "Wow! This is a perfect shoe for running. Very comfortable",
    rating: 2,
    user_id: 1,
  },
  {
    review: "Great fit. Color different from shoe pictured",
    rating: 3,
    user_id: 5,
  },
  {
    review: "Definitely recommend",
    rating: 4,
    user_id: 5,
  },
  {
    review: "I see why this is a best seller. Quality shoe",
    rating: 4,
    user_id: 1,
  },
  {
    review: "An okay shoe",
    rating: 4,
    user_id: 3,
  },
  {
    review: "4/5 stars. Lost a star because of the color",
    rating: 4,
    user_id: 2,
  },
  {
    review:
      "I've had this shoe for 3 years now and have been an avid runner in them since I bought them. Besides obviously having a bit of dirt on them the quality of the shoe has not changed!",
    rating: 4,
    user_id: 6,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
