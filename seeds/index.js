const seedReview = require("./review-seeds");
const seedUsers = require("./user-seeds");
const seedProduct = require("./product");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedReview();
  console.log("\n----- REVIEWS SEEDED -----\n");

  await seedProduct();
  console.log("\n----- Products SEEDED -----\n");

  process.exit(0);
};

seedAll();
