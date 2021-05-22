const { Post } = require('../models');

const postData = [
    {
        title: "TEST",
        content: "TEST"
    },
    {
        title: "TEST",
        content: "TEST"
    },
    {
        title: "TEST",
        content: "TEST"

    },
    {
        title: "TEST",
        content: "TEST"
    },
    {
        title: "TEST",
        content: "TEST"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;