const router = require("express").Router();

const user = require("./user-routes");
const review = require("./review-routes");
const product = require("./product-routes");

router.use("/users", user);
router.use("/review", review);
router.use("/product", product);

module.exports = router;
