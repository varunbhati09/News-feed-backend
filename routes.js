const express = require('express');
const router = express.Router();

router.use('/users', require('./routes/users'));
router.use('/interests', require('./routes/interests'));
router.use('/recommendations', require('./routes/recommendations'));
router.use('/articles', require('./routes/articles'));

module.exports = router;
