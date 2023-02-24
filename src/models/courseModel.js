const con = require('../db/dbConnection')

const courseModel = {}

courseModel.listAllCourses = (callback) => {
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

courseModel.createCourse = (course, callback) => {
  const { curso, cargahoraria } = course
  const sql = 'INSERT INTO cursos SET ?;'
  const values = { curso, cargahoraria }

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

courseModel.deleteCourse = (id, callback) => {
  const sql = 'DELETE FROM cursos WHERE id = ?;'
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}

module.exports = courseModel