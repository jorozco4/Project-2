const { Review } = require("../models");

const reviewData = [
  {
    review_title: "TEST",
    review: "TEST",
    user_id: 1,
  },
  {
    review_title: "TEST",
    review: "TEST",
    user_id: 2,
  },
  {
    review_title: "TEST",
    review: "TEST",
    user_id: 3,
  },
  {
    review_title: "TEST",
    review: "TEST",
    user_id: 4,
  },
  {
    review_title: "TEST",
    review: "TEST",
    user_id: 5,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
