const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Jesse_Orozco",
    password: "p@ssword1",
  },
  {
    id: 2,
    username: "Cameron_Findlay",
    password: "p@ssword2",
  },
  {
    id: 3,
    username: "Jada_Desormeaux",
    password: "p@ssword3",
  },
  {
    id: 4,
    username: "Tom_Bentley",
    password: "p@ssword4",
  },
  {
    id: 5,
    username: "Sydney_Williams",
    password: "p@ssword5",
  },
  {
    id: 6,
    username: "Perry_McDaniels",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
