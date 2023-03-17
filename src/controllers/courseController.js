import courseModel from '../models/courseModel.js'

export const listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.length) {
        res.json(result)
      } else {
        res.json({ message: "Nenhum curso cadastrado!" })
      }
    }
  })
}

export const showCourse = (req, res) => {
  const id = req.params.id

  courseModel.showCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.length) {
        res.json(result[0])
      } else {
        res.status(404).json({ message: `Curso ${id} não encontrado!` })
      }
    }
  })
}

export const createCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos
  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      res.json({
        message: "Curso Cadastrado!",
        course: {
          id: result.insertId,
          ...course
        }
      })
    }
  })
}

export const deleteCourse = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Curso deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Curso ${id} não encontrado` })
      }
    }
  })
}

export const deleteIdCourse = (req, res) => {
  const { id } = req.params
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Curso deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Curso ${id} não encontrado` })
      }
    }
  })
}

export const updateCourse = (req, res) => {
  const course = req.body

  //TODO Verificar se os dados são válidos
  courseModel.updateCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Curso Atualizado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Curso ${course.id} não encontrado` })
      }
    }
  })
}