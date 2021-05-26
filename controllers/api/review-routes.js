const router = require('express').Router();
const { Review, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res)=> {
    try {
        const data = await Review.findAll({
            attributes: ['id', 'review_title', 'review'],
            order:[['id', 'DESC']],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'review_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
            ]
        });
    res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Review.findOne({
            where: {
              id: req.params.id
            },
            attributes: ['id', 'review_title', 'review'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'review_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
            ]
        });
    if (!data) {
        res.status(404).json({message: 'No post found with this id'})
    }
    res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', withAuth, (req, res) => {
    Review.create({
     review_title: req.body.review_title,
     review: req.body.review,
     user_id: req.session.user_id
    })
    .then(data => res.status(200).json(data))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Review.update({
        review_title: req.body.review_title,
        review: req.body.review
    },
    {
        where: {
          id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.delete('/:id', async (req, res) => {
    try {
      const data = await Review.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!data) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router