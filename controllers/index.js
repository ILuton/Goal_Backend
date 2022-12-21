const router = require('express').Router();

const goalRoutes = require('./goalRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/goal', goalRoutes);

module.exports = router;