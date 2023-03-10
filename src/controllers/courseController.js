import courseModel from '../models/courseModel.js'

export const listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const showCourse = (req, res) => {
  const id = req.params.id

  courseModel.showCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos
  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

export const deleteCourse = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "Curso Deletado com Sucesso!" })
  })
}

export const deleteIdCourse = (req, res) => {
  const { id, slug } = req.params
  console.log(slug)
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "Curso Deletado com Sucesso!" })
  })
}

export const updateCourse = (req, res) => {
  const course = req.body

  const varteste = req.query
  console.log(varteste)

  //TODO Verificar se os dados são válidos
  courseModel.updateCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Atualizado!" })
  })
}