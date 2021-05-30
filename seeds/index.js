const seedReview = require("./review-seeds");
const seedProduct = require("./product")
const seedUser = require("./user")
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedProduct();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedReview();
  console.log("\n----- REVIEWS SEEDED -----\n");

  process.exit(0);
};

seedAll();
