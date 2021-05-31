const { User } = require("../models");

const productData = [
    {
        first_name: "Test",
        last_name: "Name",
        username: "Test_Name",
        password: "p@ssword1"
    },
    {
        first_name: "Jada",
        last_name: "Des",
        username: "Jada_Des",
        password: "p@ssword2"
    }
];

const seedUsers = () => User.bulkCreate(productData);

module.exports = seedUsers;