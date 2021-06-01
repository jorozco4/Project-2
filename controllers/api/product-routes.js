const router = require("express").Router();
const { Product, Review, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const data = await Product.findAll({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Product.findByPk(req.params.id, {
      include: [
        { model: Review,
          include: {
            model: User,
            attributes: ['username']
          }
         },
      ],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/new", async (req, res) => {
  try {
    const data = Product.create({
      brand: req.body.brand,
      name: req.body.name,
      year: req.body.year,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const productData = await Product.findOne({
      where: req.body,
      include: [{ model: Review }],
    });
    res.json({ id: productData.dataValues.id });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
