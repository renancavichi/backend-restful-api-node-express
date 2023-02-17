const mysql = require('mysql')
const courseModel = require('../models/courseModel')
const courseController = {}

courseController.listAllCourses = (req, res) => {
  courseModel.listAllCourses(req, res)
}

courseController.createCourse = (req, res) => {
  res.json({ message: "Entrou na rota /course com POST!" })
}

module.exports = courseController