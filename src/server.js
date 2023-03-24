import express from 'express'
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { SERVER } from './config.js'
import errorHandler from './middlewares/errorHandler.js'
import logger from './middlewares/logger.js'

const app = express()
const port = SERVER.PORT

app.use(logger)
app.use(express.json())
//app.use(express.urlencoded({ extended: false })) // get form data urlenconded

app.use('/course', courseRoutes)
app.use('/user', userRoutes)

app.all('*', (req, res) => {
  res.status(404).json({ message: '404 Rota não encontrada...' })
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})