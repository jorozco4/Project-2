const router = require("express").Router();
const { Review, User, Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const data = await Review.findAll({
      attributes: ["id", "review", "rating"],
      order: [["id", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const res = await Review.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    res.render(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const data = await Review.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ["id", "review_title", "review"],
//       order: [["id", "DESC"]],
//       include: [
//         {
//          model: User,
//          attributes: ["username"],
//         },
//       ],
//     });
//     if (!data) {
//       res.status(404).json({ message: "No post found with this id" });
//     }
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// TODO - Insert withAuth back in when it works
router.post("/", (req, res) => {
  console.log(req.body);
  const body = req.body;

  Review.create({
    ...body,
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
