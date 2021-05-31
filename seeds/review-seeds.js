const { Review } = require("../models");

const reviewData = [
  {
    review_title:"Great Shoes!",
    review: "Tested these right out of the box and couldn't be happier. Would reccomend.",
    rating: 5,
    product_id: 1,
    user_id: 1,
  },
  {
    review_title:"Could be Better..",
    review: "They are functional shoes and look decent, but for that price I want more comfort.",
    rating: 2,
    product_id: 1,
    user_id: 2,
  },

];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
