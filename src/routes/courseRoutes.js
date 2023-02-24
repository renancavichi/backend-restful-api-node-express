const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

const { listAllCourses, createCourse } = courseController

router.get('/', listAllCourses);
router.post('/', createCourse);

module.exports = router;