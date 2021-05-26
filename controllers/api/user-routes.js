const router = require('express').Router();
const {User, Review, Comment} = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude:['password']}
    })
    .then (data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    User.findOne ({
        attributes: {exclude:['password']},
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Review,
                attributes: ['id', 'review_title', 'review']
            },
            {
                model: Comment,
                attributes: ['id', 'comment'],
                include: {
                    model: Review,
                    attributes: ['review_title', 'review']
                }
            },
        ]
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password
        });
    
        req.session.save(() => {
          req.session.loggedIn = true;
    
          res.status(200).json(user);
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.post('/login', async (req, res) => {
    try {
        const data = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
    
        if (!data) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
    
        const validPassword = await data.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
    
        req.session.save(() => {
          req.session.loggedIn = true;
    
          res
            .status(200)
            .json({ user: data, message: 'You are now logged in!' });
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;