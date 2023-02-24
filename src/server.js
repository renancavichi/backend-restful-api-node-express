const express = require('express')
const courseRoutes = require('./routes/courseRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()
const port = 3100

app.use(express.json())

//TODO: Tratar erro de json inválido

app.use('/course', courseRoutes)
app.use('/user', userRoutes)

app.all('*', (req, res) => {
  res.status(404).send('404 Rota não encontrada!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})