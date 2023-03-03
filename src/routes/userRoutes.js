import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: "Entrou na rota /user com GET!" })
})

router.post('/', (req, res) => {
  res.json({ message: "Entrou na rota /user com POST!" })
})

export default router