const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.post('/store', courseController.store);
router.use('/create', courseController.create);
router.use('/:id/edit', courseController.edit);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDestroy);
router.use('/:slug', courseController.show);

module.exports = router;
