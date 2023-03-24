import userModel from '../models/userModel.js'

export const listAllUsers = (req, res) => {
  userModel.listAllUsers((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.length) {
        res.json(result)
      } else {
        res.json({ message: "Nenhum usuário cadastrado!" })
      }
    }
  })
}

export const showUser = (req, res) => {
  const id = req.params.id

  userModel.showUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result[0])
  })
}

export const createUser = (req, res) => {
  const user = req.body

  try {
    userModel.validateUser(user)
    userModel.createUser(user, (error, result) => {
      if (error)
        res.status(500).json({ message: "Erro no Banco de Dados" })
      if (result) {
        res.json({
          message: "Usuário Cadastrado!",
          user: {
            id: result.insertId,
            ...user
          }
        })
      }
    })
  } catch (error) {
    const formatted = error.format();
    delete formatted._errors
    const fields = {}
    for (let field in formatted) {
      fields[field] = { messages: formatted[field]._errors }
    }
    res.status(400).json({
      message: 'Dados inválidos',
      fields: fields
    })
  }
}

export const deleteUser = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado` })
      }
    }
  })
}

export const deleteIdUser = (req, res) => {
  const { id } = req.params
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado` })
      }
    }
  })
}

export const updateUser = (req, res) => {
  const user = req.body

  //TODO Verificar se os dados são válidos
  userModel.updateUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Atualizado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${user.id} não encontrado` })
      }
    }
  })
}