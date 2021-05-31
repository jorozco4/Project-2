const router = require("express").Router();
const { Review, User, Product } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/product/:id", async (req, res) => {
  try{
    const data = await Product.findByPk(req.params.id, {
       include: [
         { model: Review,
           include: {
             model: User,
             attributes: ['username']
           }
          },
       ],
     })
     const product = data.get({ plain:true });
      res.render('review', { product });
     }catch(err) {
       res.status(500).json(err)
     }
 });

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("sign-up");
});

module.exports = router;
