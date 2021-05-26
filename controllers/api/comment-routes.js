const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll({})
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post ('/', withAuth, (req,res) => {
    if (req.session) {
        Comment.create ({
            comment: req.body.comment,
            review_id: req.body.review_id,
            user_id: req.session.user_id
        })
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const data = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!data) {
        res.status(404).json({ message: 'No comment located with that id!' });
        return;
      }
  
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router