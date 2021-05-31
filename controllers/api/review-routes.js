const router = require("express").Router();
const { Review, User, Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', (req, res) => {
  Review.findAll({})
  .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get("/:id", (req, res) => {
  Review.findAll({
    where: {
    product_id: req.params.id
    },
    include:[{
      model: User,
      attributes: ['username']
    }]
  })
  .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

// TODO - Insert withAuth back in when it works
router.post("/", withAuth, async (req, res) => {
  Review.create({
    review_title: req.body.review_title,
    review: req.body.review,
    rating: req.body.rating,
    product_id: req.body.product_id,
    user_id: req.session.user_id,
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Review.update(
    {
      review_title: req.body.review_title,
      review: req.body.review,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Review.destroy({
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
