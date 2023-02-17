const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

router.get('/', courseController.listAllCourses);
router.post('/', courseController.createCourse);

module.exports = router;