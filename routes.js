const express = require('express');
const router = express.Router();

const testPageRoutes = require('./routes/testRoutes');
const homePageRoutes = require('./routes/homeRoutes');

router.use('/', homePageRoutes);
router.use('/test', testPageRoutes);

module.exports = router;