const router = require("express").Router();
const { User, Review, Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/:id", (req, res) => {
//   User.findOne({
//     attributes: { exclude: ["password"] },
//     where: {
//       id: req.params.id,
//     },
//     include: [
//       {
//         model: Review,
//         attributes: ["id", "review_title", "review"],
//       },
//       {
//         model: Comment,
//         attributes: ["id", "comment"],
//         include: {
//           model: Review,
//           attributes: ["review_title", "review"],
//         },
//       },
//     ],
//   })
//     .then((data) => res.json(data))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({user: user, message: 'You are logged in!'});
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log (req.body)
  try {
    const data = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!data) {
      res
        .status(400)
        .json({ message: "Incorrect username. Please try again!" });
      return;
    }

    const check2 = await data.checkPassword(req.body.password);

    if (!check2) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ user: data, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
