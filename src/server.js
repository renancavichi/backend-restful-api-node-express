//const express = require('express')
import express from 'express'
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { SERVER } from './config.js'

const app = express()
const port = SERVER.PORT

app.use(express.json())
//app.use(express.urlencoded({ extended: false })) // form urlenconded

//TODO: Tratar erro de json inválido

app.use('/course', courseRoutes)
app.use('/user', userRoutes)

app.all('*', (req, res) => {
  res.status(404).send('404 Rota não encontrada!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})