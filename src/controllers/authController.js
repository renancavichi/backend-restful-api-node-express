import userModel from '../models/userModel.js'
import sessionModel from '../models/sessionModel.js'
import crypto from 'crypto'


export const login = (req, res) => {
  const { email, pass } = req.body

  userModel.loginUser(email, pass, (error, resultUser) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (resultUser) {
      if (resultUser.length) { //checa se achou um user
        // se achou cria a session
        const token = crypto.randomUUID()
        const idUser = resultUser[0].id
        sessionModel.createSession(idUser, token, (error, resultSession) => {
          if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
          if (resultSession) {
            res.json({
              message: "Usuário Logado!",
              token: token,
              user: {
                name: resultUser[0].name,
                email: resultUser[0].email,
                avatar: resultUser[0].avatar,
                roles: resultUser[0].roles
              }
            })
          }
        })
      } else {
        res.status(401).json({ message: "Login ou senha inválidos. Acesso não autorizado!" })
      }
    }
  })
}

export const logout = (req, res) => {
  const { email, token } = req.body

  sessionModel.deleteSession(email, token, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário deslogado com sucesso!" })
      } else {
        res.status(404).json({ message: `Session não encontrada` })
      }
    }
  })
}