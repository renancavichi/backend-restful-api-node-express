const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

const { listAllCourses, createCourse, deleteCourse } = courseController

router.get('/', listAllCourses)
router.post('/', createCourse)
router.delete('/', deleteCourse)

module.exports = router