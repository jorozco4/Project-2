const { Comment } = require('../models');

const commentData = [
    {
        comment: "This shoe is amazing!!"
    },
    {
        comment: "Wow! This is a perfect shoe for running. Very comfortable"
    },
    {
        comment: "Great fit. Color different from shoe pictured"
    },
    {
        comment: "Definitely recommend"
    },
    {
        comment: "I see why this is a best seller. Quality shoe"
    },
    {
        comment: "An okay shoe"
    },
    {
        comment: "4/5 stars. Lost a star because of the color"
    },
    {
        comment: "I've had this shoe for 3 years now and have been an avid runner in them since I bought them. Besides obviously having a bit of dirt on them the quality of the shoe has not changed!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;