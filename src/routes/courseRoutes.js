const express = require('express');
const mysql = require('mysql')
const router = express.Router();

router.get('/', (req, res) => {
	const con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "apinode"
	})
	const sql = "SELECT * FROM cursos;"
	con.query(sql, (err, result) => {
		if (err) {
			res.status(500).json({ message: "Servidor indisponível, tente novamente mais tarde!" });
		}
		//const objResult = JSON.parse(JSON.stringify(result))
		res.json(result)
	})
});

router.post('/', (req, res) => {
	res.json({ message: "Entrou na rota /course com POST!" })
});

module.exports = router;