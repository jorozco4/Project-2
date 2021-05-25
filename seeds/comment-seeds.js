const { Comment } = require('../models');

const commentData = [
    {
        comment: "This shoe is amazing!!",
        post_id: 1,
        user_id: 3,
    },
    {
        comment: "Wow! This is a perfect shoe for running. Very comfortable",
        post_id: 2,
        user_id: 1,
    },
    {
        comment: "Great fit. Color different from shoe pictured",
        post_id: 3,
        user_id: 5,
    },
    {
        comment: "Definitely recommend",
        post_id: 4,
        user_id: 5,
    },
    {
        comment: "I see why this is a best seller. Quality shoe",
        post_id: 4,
        user_id: 1,
    },
    {
        comment: "An okay shoe",
        post_id: 4,
        user_id: 3,
    },
    {
        comment: "4/5 stars. Lost a star because of the color",
        post_id: 4,
        user_id: 2,
    },
    {
        comment: "I've had this shoe for 3 years now and have been an avid runner in them since I bought them. Besides obviously having a bit of dirt on them the quality of the shoe has not changed!",
        post_id: 4,
        user_id: 6,
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;