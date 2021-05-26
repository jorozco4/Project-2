const router = require("express").Router();
const { Review, User, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const reviewData = await Review.findAll({
      include: [User],
    });

    // Serialize data so the template can read it
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    // Pass serialized data and session flag into template
    // res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
