const mysql = require('mysql')
const courseModel = require('../models/courseModel')

const courseController = {}

courseController.listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

courseController.createCourse = (req, res) => {
  courseModel.createCourse(req, res)
}

module.exports = courseController