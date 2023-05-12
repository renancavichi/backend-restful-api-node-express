import con from '../db/dbConnection.js'

export const createSession = (userId, token, callback) => {

  const sql = 'INSERT INTO sessions (id_user, session) VALUES (?, ?);'
  const values = [userId, token]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const deleteSession = (email, token, callback) => {
  const sql = 'DELETE FROM sessions WHERE id_user = (SELECT id FROM users WHERE email = ?) AND session = ?;'
  const value = [email, token]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export default { createSession, deleteSession }