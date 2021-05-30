const { User } = require("../models");

const productData = [
    {
        first_name: "Test",
        last_name: "Name",
        username: "Test_Name",
        password: "p@ssword1"
    },
];

const seedUsers = () => User.bulkCreate(productData);

module.exports = seedUsers;