import { checkSession } from "../models/sessionModel.js"

const authenticated = (req, res, next) => {
  const token = req.headers.authorization
  checkSession(token, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      if (result.length) {
        req.idUserLogged = result[0].id_user
        req.rolesUserLogged = result[0].roles
        next()
      } else {
        res.status(401).json({ message: `Usuário não autorizado. Sessão não encontrada!` })
      }
  })
}

export default authenticated