const { Review } = require("../models");

const reviewData = [
  {
    review: "TEST",
    rating: 1,
    user_id: 1,
  },
  {
    review: "TEST",
    rating: 1,
    user_id: 2,
  },
  {
    review: "TEST",
    rating: 1,
    user_id: 3,
  },
  {
    review: "TEST",
    rating: 1,
    user_id: 4,
  },
  {
    review: "TEST",
    rating: 1,
    user_id: 5,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
