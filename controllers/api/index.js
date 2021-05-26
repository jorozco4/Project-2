const router = require('express').Router();

const user = require('./user-routes');
const review = require('./review-routes');
const comment = require('./comment-routes');

router.use('/users', user);
router.use('/review', review);
router.use('/comments', comment);

module.exports = router;