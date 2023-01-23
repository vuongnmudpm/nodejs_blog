const express = require('express')
const router = express.Router();

const newsController = require('../app/controllers/SiteController');

//newsController.index

router.use('/search', newsController.search);
router.use('/', newsController.home);

module.exports = router;