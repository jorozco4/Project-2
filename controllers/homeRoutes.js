const router = require("express").Router();
const { Review, User, Comment } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const postData = await Review.findAll({
//       include: [User],
//     });

//     // Serialize data so the template can read it
//     const posts = postData.map((post) => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("homepage", { posts });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


module.exports = router;
