const mysql = require('mysql')
const courseModel = {}


courseModel.listAllCourses = (req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode"
  })
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, data) => {
    if (err) res.status(500).json({ message: "Erro no Banco de Dados" })
    res.json(data)
  })

}

module.exports = courseModel