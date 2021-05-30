const { Review } = require("../models");

const reviewData = [
  {
    review_title:"TEST",
    review: "TEST",
    rating: 1,
    product_id: 1,
    user_id: 1,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
