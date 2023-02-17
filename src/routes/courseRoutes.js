const express = require('express');
const mysql = require('mysql')
const router = express.Router();

const courseController = require('../controllers/courseController')

router.get('/', courseController.listAllCourses);
router.post('/', courseController.createCourse);

module.exports = router;