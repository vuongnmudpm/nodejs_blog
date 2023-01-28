const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.delete('/delete', courseController.delete);
router.post('/update', courseController.update);
router.post('/store', courseController.store);
router.use('/create', courseController.create);
router.use('/:slug', courseController.show);
router.use('/', courseController.show);

module.exports = router;