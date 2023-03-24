const errorHandler = (error, req, res, next) => {
  console.log(error)
  if (error.status === 400 && error?.body) {
    res.status(500).json({ message: 'Erro ao ler o JSON enviado no Body!' })
  } else {
    res.status(500).json({ message: 'Opss... erro no servidor, verifique sua requisição' })
  }
}

export default errorHandler