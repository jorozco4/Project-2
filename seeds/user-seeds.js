const { User } = require("../models");

const userData = [
  {
    id: 1,
    first_name: "Jesse",
    last_name: "Orozco",
    username: "Jesse_Orozco",
    password: "p@ssword1",
  },
  {
    id: 2,
    first_name: "Cameron",
    last_name: "Findlay",
    username: "Cameron_Findlay",
    password: "p@ssword2",
  },
  {
    id: 3,
    first_name: "Jada",
    last_name: "Desormeaux",
    username: "Jada_Desormeaux",
    password: "p@ssword3",
  },
  {
    id: 4,
    first_name: "Tom",
    last_name: "Bentley",
    username: "Tom_Bentley",
    password: "p@ssword4",
  },
  {
    id: 5,
    first_name: "Sydney",
    last_name: "Williams",
    username: "Sydney_Williams",
    password: "p@ssword5",
  },
  {
    id: 6,
    first_name: "Perry",
    last_name: "McDaniels",
    username: "Perry_McDaniels",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
