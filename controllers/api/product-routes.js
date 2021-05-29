const router = require("express").Router();
const { Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const data = await Product.findAll({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req,res) => {
  try {
    const data = Product.create({
      brand: req.body.brand,
      name: req.body.name,
      year: req.body.year
    });

  res.status(200).json(data)

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
